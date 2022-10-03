function foo() {
    var bar = 13;
    function baz() {
      console.log(bar);
    }
    baz();
  }
  
  foo(); // 13
  console.log(bar); // ReferenceError: bar is not defined
  baz(); // ReferenceError: baz is not defined
  