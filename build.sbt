name := "ScalaJS"
version := "0.1"
scalaVersion := "2.13.2"

enablePlugins(ScalaJSPlugin)
jsEnv := new org.scalajs.jsenv.jsdomnodejs.JSDOMNodeJSEnv()

// This is an application with a main method
scalaJSUseMainModuleInitializer := true

// ScalaJS Libraries.
libraryDependencies += "org.scala-js" %%% "scalajs-dom" % "1.0.0"
libraryDependencies += "com.lihaoyi" %%% "utest" % "0.7.4" % "test"
testFrameworks += new TestFramework("utest.runner.Framework")