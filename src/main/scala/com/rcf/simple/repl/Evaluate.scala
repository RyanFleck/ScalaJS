package com.rcf.simple.repl

import scala.scalajs.js.annotation.{JSExport, JSExportTopLevel}

@JSExportTopLevel("ScalaEval")
class Evaluate {

  def doEval(s:String):Unit = {
    println("Evaluating" + s)
  }

  @JSExport
  def sayHello() : Unit = {
    println("Hello, JavaScript!")
  }

}
