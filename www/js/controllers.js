angular.module('mc.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

})

.controller('SearchCtrl', function($scope, $stateParams, MediaCloud){
  $scope.keyword = $stateParams.keyword;
  $scope.data = {};
  $scope.service = MediaCloud;
  $scope.data.sentenceCount = null;
  $scope.$watch('service.results', function(results){
  	if(results!=null){
  		console.log("watch got results = "+results.count);
  		$scope.data.sentenceCount = results.count;
  	} else {
  		console.log("watch got null");
  	}
  });
  console.log("Calling MC from ctrl");
  MediaCloud.recentMentions($scope.keyword);
})

.controller('CompareCtrl', function($scope, $stateParams, MediaCloud){
  $scope.word1 = $stateParams.word1;
  $scope.word2 = $stateParams.word2;
  $scope.data = {};
  $scope.service = MediaCloud;
  $scope.data.word1sentenceCount = null;
  $scope.data.word2sentenceCount = null;
  $scope.$watch('service.word1Results', function(results){
  	if(results!=null){
  		console.log("watch got results = "+results.count);
  		$scope.data.word1sentenceCount = results.count;
  	} else {
  		console.log("watch got null");
  	}
  });
  $scope.$watch('service.word2Results', function(results){
  	if(results!=null){
  		console.log("watch got results = "+results.count);
  		$scope.data.word2sentenceCount = results.count;
  	} else {
  		console.log("watch got null");
  	}
  });
  console.log("Calling MC from ctrl");
  MediaCloud.compareMentions($scope.word1, $scope.word2);
})

;
