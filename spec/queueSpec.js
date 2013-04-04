describe("queue", function() {
  var queue;

  beforeEach(function() {
    queue = makeQueue();
  });

  describe("add", function(){
    it("should have a method named 'add'", function() {
      expect(queue.add).toEqual(jasmine.any(Function));
    });

    it("adds an item when add is called", function(){
      queue.add("a");
      expect(queue.remove()).toEqual("a");
    });
  });

  describe("remove", function(){
    it("should have a method named 'remove'", function() {
      expect(queue.remove).toEqual(jasmine.any(Function));
    }); 

    it("removes the first item added to the queue", function(){
      queue.add("a");
      queue.add("b");
      expect(queue.remove()).toEqual("a");
      expect(queue.remove()).toEqual("b");
    });    
  });

  describe("size", function(){
    it("should have a method named 'size'", function() {
      expect(queue.size).toEqual(jasmine.any(Function));
    });  

    it("should return the length of the queue when size is called", function(){
      queue.add("a");
      queue.add("b");
      expect(queue.size()).toEqual(2);
    });
  });
});