@echo off
echo Building ScalaJS Experiments to public/
call npm i
call sbt fullOptJS
call webpack
