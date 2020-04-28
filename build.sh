#! /bin/bash

echo "Building ScalaJS Experiments to public/"
npm i
sbt fullOptJS
webpack
