package tutorial.webapp

// ScalaJS imports:

import org.scalajs.dom
import org.scalajs.dom.{Element, document}

import scala.collection.mutable.ListBuffer

object TutorialApp {

  def main(args: Array[String]): Unit = {
    println("Hello ScalaJS! Iteration 4.")
    document.addEventListener("DOMContentLoaded", { e: dom.Event => setupUI() })
  }

  def setupUI(): Unit = {
    val elems = new ListBuffer[Element]

    if (document.getElementById("scala-webapp") == null) {
      // App-div
      val app = document.createElement("div")
      app.id = "scala-webapp"
      document.body.appendChild(app)
    }

    // Header
    val header = document.createElement("h1")
    header.textContent = "ScalaJS Experiments"
    elems += header

    // First paragraph
    val intro = document.createElement("p")
    intro.textContent = "This web-page was generated using Scala, which was compiled to JavaScript with ScalaJS."
    elems += intro

    // Header for appending-section.
    elems += document.createElement("hr")
    val header2 = document.createElement("h3")
    header2.textContent = "Directing Text to Evaluation Class"
    elems += header2

    // Header for appending-section.
    elems += document.createElement("hr")
    val header3 = document.createElement("h3")
    header3.textContent = "Appending Elements to the DOM"
    elems += header3


    // Paragraph button
    val button = document.createElement("button")
    button.textContent = "Add paragraph"
    button.addEventListener("click", { (e: dom.MouseEvent) => addClickedMessage() })
    elems += button

    val appendDiv = document.createElement("div")
    appendDiv.id = "append-test"
    elems += appendDiv

    elems += document.createElement("hr")
    elems.foreach(f => document.getElementById("scala-webapp").appendChild(f))

    // We could just integrate this.
    appendPar(document.getElementById("scala-webapp"), "All elements above generated using ScalaJS")
  }

  // Use if you need to call from raw js.
  // @JSExportTopLevel("addClickedMessage")
  def addClickedMessage(): Unit = {
    val clicks = howManyClicks()
    appendPar(document.getElementById("append-test"),
      text = "Button clicked " + clicks + (if (clicks < 2) " time!" else " times!"))
  }

  def appendPar(targetNode: dom.Node, text: String): Unit = {
    val pNode = document.createElement("p")
    pNode.textContent = text
    targetNode.appendChild(pNode)
  }

  def howManyClicks(): Int = {
    var count: Int = 1
    val x = document.getElementsByTagName("p")
    for (y <- 0 to (x.length - 1)) {
      val z = x.apply(y)
      if (z.textContent.startsWith("Button clicked")) {
        count = count + 1
      }
    }
    count

    //document.querySelectorAll("p").count(_.textContent.startsWith("Button clicked"))
  }


}
