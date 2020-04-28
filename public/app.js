document.addEventListener("DOMContentLoaded", function () {

    console.log('Loaded regular javascript file.');

    ScalaEval.sayHello();

    // With Scala
    ScalaEval.evalLog("This was printed by JS function call to Scala code.");

    let repl = document.getElementById("repl-window");
    repl.value += "TrashLang Interpreter, enter command or help.\n>";
    repl.setAttribute("spellcheck", "false")
    repl.onkeydown = function (e) {
        if (e.key == "Enter") {
            e.preventDefault();
            // Extremely inefficient, replace soon:
            var content = repl.value.split("\n");
            var to_interpret = content[content.length - 1].substring(1);
            if (to_interpret != "") {
                console.log("Evaluating " + to_interpret);
                repl.value += "\nEvaluating \'" + to_interpret + "\'\n>";
                repl.scrollTop = repl.scrollHeight;
            }

        }
    }


});