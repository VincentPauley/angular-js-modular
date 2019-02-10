( function() { // wrap in closure so that 'use strict' doesn't effect concatenated scripts
    'use strict';

    var app = angular.module( 'app', [] );
    
    app.controller( 'main', [ '$scope', function( $scope ) {
    
        $scope.firstName = 'Vincent';
    }]);
})();