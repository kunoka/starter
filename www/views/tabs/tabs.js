/**
 * Created by gary on 4/28/16.
 */

angular.module('App')

    .config(function($stateProvider) {
        $stateProvider
            .state('tabs', {
                abstract: true,
                url: '/tabs',
                templateUrl: 'views/tabs/tabs.html'
            });
    });
