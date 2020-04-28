import sjs from './target/scala-2.13/scalajs-opt.js';



(function(){
    console.log("Webpack'd scripts loaded.\nSay hello by calling Scala function:");
    sjs.ScalaEval.sayHello();

}).call(this);