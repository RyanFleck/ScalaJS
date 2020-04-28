#! /bin/bash

npm i
sbt fullOptJS
cp target/scala-2.13/scalajs-opt.js public/scalajs-opt.js
