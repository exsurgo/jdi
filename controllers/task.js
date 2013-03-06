app.controller('TaskCtrl', function TaskCtrl($scope, $location, taskStorage, filterFilter) {

    var tasks = $scope.tasks = taskStorage.get();

    $scope.newTask = "";
    $scope.editedTask = null;

    $scope.$watch('tasks', function () {
        $scope.remainingCount = filterFilter(tasks, {completed: false}).length;
        $scope.doneCount = tasks.length - $scope.remainingCount;
        $scope.allChecked = !$scope.remainingCount
        taskStorage.put(tasks);
    }, true);

    if ($location.path() === '') $location.path('/');
    $scope.location = $location;

    $scope.$watch('location.path()', function (path) {
        $scope.statusFilter = (path == '/active') ?
        { completed: false } : (path == '/completed') ?
        { completed: true } : null;
    });

    // add
    $scope.addTask = function () {
        if (!$scope.newTask.length) {
            return;
        }
        tasks.push({
            title: $scope.newTask,
            completed: false
        });
        $scope.newTask = '';
    };

    // edit
    $scope.editTask = function (task) {
        $scope.editedTask = task;
    };

    // save
    $scope.doneEditing = function (task) {
        $scope.editedTask = null;
        if (!task.title) {
            $scope.removeTask(task);
        }
    };

    // remove
    $scope.removeTask = function (task) {
        tasks.splice(tasks.indexOf(task), 1);
    };

    // clear
    $scope.clearDoneTasks = function () {
        $scope.tasks = tasks = tasks.filter(function (val) {
            return !val.completed;
        });
    };

    // mark all
    $scope.markAll = function (done) {
        tasks.forEach(function (task) {
            task.completed = done;
        });
    };

});
