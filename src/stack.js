// Note: don't use javascript's native array functions to do this.
var makeStack = function(){
  var length = 0;
  var stack = {
    add: function(new_item){
      items[length] = new_item;
      length += 1;
    },

    remove: function(){
   //WHatever is on the top of the stack,  
   // put it in a variable and hten remove it. Return that variable.
      var popped_item = items[length-1];
      delete items[length];
      return popped_item;
    },

    size: function(){
      return length;
    }

  };
  var items = {
    0: undefined

  };     

  
  return stack;
};