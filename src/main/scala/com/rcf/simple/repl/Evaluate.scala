package com.rcf.simple.repl

import org.scalajs.dom.document
import org.scalajs.dom
import tutorial.webapp.TutorialApp
import tutorial.webapp.TutorialApp.appendPar

import scala.scalajs.js.annotation.{JSExport, JSExportTopLevel}

@JSExportTopLevel("ScalaEval")
object Evaluate {

  def doEval(s:String):Unit = {
    println("Evaluating" + s)
  }

  @JSExport
  def sayHello() : Unit = {
    println("Hello, JavaScript! This is a Scala function!")
  }

  @JSExport
  def returnText(text : String) : String = {
    val y = "Processing '" + text + "' in Scala..."
    println(y)
    y
  }

  @JSExport
  def readyUp() : Boolean = {
    true
  }

  @JSExport
  def evalLog(text: String): Unit = {
    val a = document.createElement("li")
    a.innerText = text
    document.getElementById("eval-test-container").appendChild(a)
  }

}
