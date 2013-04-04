describe("stack", function() {
  var stack;

  beforeEach(function() {
    stack = makeStack();
  });
  describe("add", function(){
    it("should have a method named 'add'", function() {
      expect(stack.add).toEqual(jasmine.any(Function));
    });

    it("adds an item when add is called", function(){
      stack.add("a");
      expect(stack.remove()).toEqual("a");
    });
  });

  describe("remove", function(){
    it("should have a method named 'remove'", function() {
      expect(stack.remove).toEqual(jasmine.any(Function));
    }); 

    it("removes the last item added to the stack", function(){
      stack.add("a");
      stack.add("b");
      var i = stack.remove();
      expect(i).toEqual("b");
    });    
  });

  describe("size", function(){
    it("should have a method named 'size'", function() {
      expect(stack.size).toEqual(jasmine.any(Function));
    });  

    it("should return the length of the stack when size is called", function(){
      stack.add("a");
      stack.add("b");
      expect(stack.size()).toEqual(2);
    });
  });
});