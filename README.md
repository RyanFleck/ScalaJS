# ScalaJS Test Project

[![Build Status](https://travis-ci.org/RyanFleck/ScalaJS.svg?branch=master)](https://travis-ci.org/RyanFleck/ScalaJS)
[![Scala.js](https://www.scala-js.org/assets/badges/scalajs-1.0.0.svg)](https://www.scala-js.org)


A small repository partially following the [basic ScalaJS tutorial](https://www.scala-js.org/doc/tutorial/basic/)
showcasing how to compile Scala code for the web. I'm writing this because I'm
interested in edge computing and would prefer for computation to be outsourced
to client devices to lower server costs. Built with *IntelliJ IDEA*.

**Completed Goals:**

1. Write some Scala
1. Compile to JavaScript
1. Manipulate DOM
1. Write tests to verify DOM was manipulated
1. Ensure *Travis CI* can run the tests.
1. WebPack everything so I can use regular JavaScript, too.


**ToDo:**

1. Create a simple REPL
1. Send an XMLHTTPRequest to get some data
1. Process the contents of a file
1. Process the contents of a textarea
1. Persist data in client-side WebDB
1. Utilize a *module* from a different repository

<br />

**Test Example**

```
-------------------------------- Running Tests --------------------------------
+ tutorial.webapp.TutorialAppTest.HelloWorld 4ms  
+ tutorial.webapp.TutorialAppTest.ClickedMessage 4ms  
[info] Tests: 2, Passed: 2, Failed: 0
[success] Total time: 29 s, completed Apr 28, 2020, 6:41:18 PM
```