
(function(){
  angular
  .module("grumbles")
  .controller("GrumbleShowController",[
    "$stateParams",
    GrumbleShowControllerFunction
  ]);

  function GrumbleShowControllerFunction($stateParams){
    console.log("Grumble Show Controller");
    this.grumble=grumbles[$stateParams.id];
  }
}());
