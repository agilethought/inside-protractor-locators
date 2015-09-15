/**
 * Created by mike on 2/4/2015.
 */
angular.module('inside.controller.home', [
  'inside.services.score',
  'inside.models.score',
  'ui.bootstrap.modal',
  'ui.bootstrap.datepicker'
])
  .controller('Home', Home)
  .config(function($stateProvider) {
    'use strict';
    $stateProvider.state('home', {
      url: '/home',
      views: {
        'content@': {
          templateUrl: 'home/home.tpl.html',
          controller: 'Home as home'
        }
      },
      resolve: {
        scores: function(scoreService) {
          return scoreService.getAll();
        }
      }
    });
  }
);

/**
 * @class Home

 * @constructor
 */
function Home(scoreService, scores, $modal, Score) {
  'use strict';
  this.scores = scores;

  var vm = this;

  this.addScore = function() {
    var add = $modal.open({
      templateUrl: 'home/newScore.tpl.html',
      controller: 'NewScoreController as edit',
      resolve: {
        score: function() {
          return new Score();
        }
      },
      size: 'sm',
      backdrop: 'static'
    });

    add.result.then(
      function(score) {
        vm.scores.push(score);
    }
    );

  };

}
