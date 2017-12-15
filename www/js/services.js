angular.module('mc.services', ['mc.config'])

.factory('MediaCloud', function($http, MC_API_INFO) {

  var service = {
    results: null,
    recentMentions: function(keyword){
      this.results = null;
      var path = 'sentences/count?q='+keyword+'&fq=media_sets_id:1&key='+MC_API_INFO.apiKey;
      var url = "https://api.mediacloud.org/api/v2/"+path
      console.log("MC Query to "+url);
      var that = this;
      $http.get(url)
        .success(function(res){
          console.log("MC results="+res);
          that.results = res;
        })
        .error(function(res){ // this will get run in the browser due to a cross-site permissions error
          data = {count: "-1"}; // return some fake data to test with
          console.log("MC failed="+data);
          that.results = data;
        });
    },
    compareMentions: function(word1, word2){
      this.results = null;
      var path1 = 'sentences/count?q='+word1+'&fq=media_sets_id:1&key='+MC_API_INFO.apiKey;
      var url1 = "https://api.mediacloud.org/api/v2/"+path1
      var path2 = 'sentences/count?q='+word2+'&fq=media_sets_id:1&key='+MC_API_INFO.apiKey;
      var url2 = "https://api.mediacloud.org/api/v2/"+path2
      console.log("MC Query to "+url1);
      console.log("MC Query to "+url2);
      var that = this;
      $http.get(url1)
        .success(function(res){
          console.log("MC results="+res);
          that.word1Results = res;
        })
        .error(function(res){ // this will get run in the browser due to a cross-site permissions error
          data = {count: "102"}; // return some fake data to test with
          console.log("MC failed="+data);
          that.word1Results = data;
        });
        $http.get(url2)
          .success(function(res){
            console.log("MC results="+res);
            that.word2Results = res;
          })
          .error(function(res){ // this will get run in the browser due to a cross-site permissions error
            data = {count: "105"}; // return some fake data to test with
            console.log("MC failed="+data);
            that.word2Results = data;
          });

    }
  };

  return service;

})

;
