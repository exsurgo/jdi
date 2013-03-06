
app.directive('taskBlur', function() {
  return function( scope, elem, attrs ) {
    elem.bind('blur', function() {
      scope.$apply(attrs.taskBlur);
    });
  };
});
