// Note: don't use javascript's native array functions to do this.
var makeQueue = function(){
  var length = 0;
  var queue = {
    add: function(new_item){
      items[length] = new_item;
      length += 1;
    },

    remove: function(){
      var popped_item = items[0];
      items[0] = items[1];
      delete items[1];
      return popped_item;
    },

    size: function(){
      return length;
    }

  };

  var items = {
    0: undefined,
    1: "b"

  };     

  return queue;
};