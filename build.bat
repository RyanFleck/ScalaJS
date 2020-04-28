@echo off
call npm i
call sbt fullOptJS
call webpack
