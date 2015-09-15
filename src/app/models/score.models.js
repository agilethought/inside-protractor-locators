/**
 * Created by mike on 2/4/2015.
 */
angular.module('inside.models.score', [])
  .factory('Score', function() {
    'use strict';

    /**
     * @class Score
     * @constructor
     */
    var Score = function() {
      this.id = -Number(_.uniqueId());
      this.date = new Date();
      this.strokes = 0;
      this.courseId = '';
    };

    Object.defineProperty(Score.prototype, 'courseName', {
      get: function() {
        var vm = this;
        var course = _.find(Score.courses(), {id: vm.courseId});
        return course.name;
      },
      enumerable: true
    });

    /*
     * @method fromDTO
     * @param {object} dto
     */
    Score.prototype.fromDTO = function(dto) {
      var vm = this;
      vm.id = dto.id;
      vm.date = adjustDateToLocal(dto.date);
      vm.strokes = dto.strokes;
      vm.courseId = dto.courseId;
    };

    Score.prototype.toDTO = function() {
      var vm = this;
      return {
        id: vm.id,
        date: adjustLocalToUTC(vm.date),
        strokes: vm.strokes,
        courseId: vm.courseId
      }
    };

    /**
     * @method adjustDateToLocal
     * @param {string|Date} isoString
     * @returns {?Date}
     */
    function adjustDateToLocal(isoString) {
      if (!isoString) {
        return null;
      }
      var date;
      if (!(date instanceof Date)) {
        date = new Date(isoString);
      }
      return new Date(date.getTime() + date.getTimezoneOffset() * 60000);
    }

    /**
     * @method adjustLocalToUTC
     * @param {Date} localDate
     * @returns {string}
     */
    function adjustLocalToUTC(localDate) {
      if (!localDate) {
        return '';
      }
      var utcDate = new Date(localDate.getTime() -
        localDate.getTimezoneOffset() * 60000);

      return utcDate.toISOString();
    }

    /**
     * @static
     * @returns {{id: number, name: string}}
     */
    Score.courses = function() {
      return [
        {id: 33, name: 'Pebble Beach'},
        {id: 34, name: 'TPC Sawgrass'}
      ];
    };

    return Score;
  });
