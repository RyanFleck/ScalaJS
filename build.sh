#! /bin/bash

echo "Building ScalaJS Experiments to public/"
npm i
sbt fullOptJS
cp target/scala-2.13/scalajs-opt.* public/