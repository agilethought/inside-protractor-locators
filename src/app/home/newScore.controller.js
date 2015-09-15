/**
 * Created 9/15/2015.
 * Copyright 2015 Focus Technologies
 * newScore.controller
 */
angular.module('inside.controller.home')
  .controller('NewScoreController', NewScoreController);

/**
 * @class NewScoreController

 * @constructor
 */
function NewScoreController($modalInstance, score, Score) {
  'use strict';

  this.courses = [];
  this.opened = false;
  this.score = score;

  var vm = this;

  activate();


  this.openCal = function($event){
    vm.opened = true;
    $event.preventDefault();
    $event.stopPropagation();
  };

  this.cancel = function(){
    $modalInstance.dismiss();
  };

  this.save = function(){
    $modalInstance.close(vm.score);
  };


  function activate(){
    vm.courses = Score.courses();
  }

}
