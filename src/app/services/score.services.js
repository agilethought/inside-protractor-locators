/**
 * Created by mike on 2/4/2015.
 */
angular.module('inside.services.score', [
  'inside.models.score'
])
  .service('scoreService', function($http, $q, Score) {
    'use strict';

    /**
     * @class scoreService
     *
     **/

    var url = 'api/scores/';

    var getAll = function() {
      var defer = $q.defer();

      $http(
        {
          method: 'GET',
          url: url,
          isArray: true,
          cache: false
        }
      )
        .success(function(responses) {
          var scores = [];
          _.each(responses, function(dto) {
            var score = new Score();
            score.fromDTO(dto);
            scores.push(score);
          });
          defer.resolve(scores);
        })
        .error(function(data, status, headers, config) {

          defer.reject(data);
        });

      return defer.promise;
    };

    var save = function(score) {
      var defer = $q.defer();

      $http(
        {
          method: 'POST',
          data: score.toDTO(),
          url: url,
          isArray: false,
          cache: false
        }
      )
        .success(function(response) {

          var score = new Score();
          score.fromDTO(response);

          defer.resolve(score);
        })
        .error(function(data, status, headers, config) {

          defer.reject(data);
        });

      return defer.promise;
    };

    return {
      getAll: getAll,
      save: save
    };
  });
