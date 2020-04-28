package tutorial.webapp

import org.scalajs.dom
import org.scalajs.dom.document
import org.scalajs.dom.ext._
import utest._

object TutorialAppTest extends TestSuite {

  // Initialize App
  TutorialApp.setupUI()

  def tests = Tests {

    test("HelloWorld") {
      assert(document.querySelectorAll("h1").count(_.textContent == "ScalaJS Experiments") == 1)
    }

    test("ClickedMessage") {
      def paragraphs = document.querySelectorAll("p").count(_.textContent.startsWith("Button clicked"))

      val button = document.querySelector("button").asInstanceOf[dom.html.Button]
      assert(button != null && button.textContent == "Add paragraph")
      assert(paragraphs == 0)

      Array(1, 2, 3).foreach(a => {
        button.click()
      })

      assert(paragraphs == 3)
    }

  }
}