#! /bin/bash

# Written on Windows 10, untested:
sbt fullOptJS
cp target/scala-2.13/scalajs-opt.js public/scalajs-opt.js