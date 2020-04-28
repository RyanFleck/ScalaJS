document.addEventListener("DOMContentLoaded",function () {

  console.log('Loaded regular javascript file.');

  ScalaEval.sayHello();

  // In JS:
  var x = document.createElement("li");
  x.innerText = ScalaEval.returnText('It works!');
  document.getElementById("eval-test-container").appendChild(x)

  // With Scala
  ScalaEval.evalLog("It really works!")

});