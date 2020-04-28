@echo off
echo Building ScalaJS Experiments to public/
call npm i
call sbt fullOptJS
copy target\scala-2.13\scalajs-opt.* public\
