
app.directive('taskFocus', function( $timeout ) {
  return function( scope, elem, attrs ) {
    scope.$watch(attrs.taskFocus, function( newval ) {
      if ( newval ) {
        $timeout(function() {
          elem[0].focus();
        }, 0, false);
      }
    });
  };
});
