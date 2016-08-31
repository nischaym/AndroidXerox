'use strict';

(function () {
    angular
        .module("AndroidXerox")
        .controller("HomeController", HomeController);

    function HomeController($scope, $http) {

        $scope.data = {};
        $scope.skuNumber = '';
        $scope.skudata = {};

        $scope.search = search;

        function search(sku) {

            if(sku == '' || isNaN(sku) == true)
            {
                alert("enter something..!!!")
            }
            else
            {
                const url = `http://api.staples.com/v1/10001/product/partnumber/${sku}/details?catalogId=10051&locale=en_US&zipCode=02139&client_id=ptdALhzG7NNM4lvsrGIAdSZhxjuwrGP2`;
                console.log(url);
                $http({
                    method: 'GET',
                    url: url
                }).
                success(function(status) {

                    $scope.skudata = status.Product[0];
                    console.log($scope.skudata);
                }).
                error(function(status) {
                    console.log(status);
                });
            }
        }
    }

})();
