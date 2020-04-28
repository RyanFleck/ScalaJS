package tutorial.webapp

// ScalaJS imports:
import org.scalajs.dom
import org.scalajs.dom.{Element, document}

import scala.collection.mutable.ListBuffer
import scala.scalajs.js.annotation.JSExportTopLevel

object TutorialApp {

  def main(args: Array[String]): Unit = {
    println("Hello ScalaJS!")
    document.addEventListener("DOMContentLoaded", { e: dom.Event => setupUI() })
  }

  def appendPar(targetNode: dom.Node, text: String): Unit = {
    val pNode = document.createElement("p")
    pNode.textContent = text
    targetNode.appendChild(pNode)
  }

  // Use if you need to call from raw js.
  // @JSExportTopLevel("addClickedMessage")
  def addClickedMessage(): Unit = {
    appendPar(document.body, "Button clicked!")
  }

  def setupUI(): Unit = {
    val elems = new ListBuffer[Element]

    // Header
    val header = document.createElement("h1")
    header.textContent = "ScalaJS Experiment"
    elems += header

    // First paragraph
    val intro = document.createElement("p")
    intro.textContent = "This web-page was generated using Scala, which was compiled to JavaScript with ScalaJS."
    elems += intro

    // Paragraph button
    val button = document.createElement("button")
    button.textContent = "Add paragraph"
    button.addEventListener("click", {(e: dom.MouseEvent) => addClickedMessage()})
    elems += button

    elems.foreach(f => document.body.appendChild(f))

    // We could just integrate this.
    appendPar(document.body, "Paragraphs generated using ScalaJS")
  }
}

