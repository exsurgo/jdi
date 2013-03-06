// Service that persists and retrieves tasks from storage.
app.factory( 'taskStorage', function() {
  var STORAGE_ID = 'tasks-angularjs';

  return {
    get: function() {
      return [
          { label: "Take out trash", when: "today" },
          { label: "Due Laundry", when: "soon" },
          { label: "Wash Dishes", when: "someday" },
          { label: "Mop Floor", when: "late" }
      ];
      //return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
    },

    put: function( tasks ) {
      localStorage.setItem(STORAGE_ID, JSON.stringify(tasks));
    }
  };

});
