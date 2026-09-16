function checkAnswer(value, submitButtonId, divId, inputname, resultId) {
    document.getElementById(submitButtonId).addEventListener("click", function(event) {
            event.preventDefault();
            if (document.querySelector('input[name=' + inputname + ']:checked')) {
                let selectedAnswer = document.querySelector('input[name=' + inputname + ']:checked').value;

                if (selectedAnswer === value) {
                    document.getElementById(resultId).innerHTML = ("Correct answer!");
                    point = point +1;
                    document.getElementById("point").innerHTML = "Points: " + point;
                    document.getElementById(divId).style.backgroundColor = "lightgreen";
                } else {
                    document.getElementById(resultId).innerHTML = ("Incorrect answer. The correct answer is " + value + ".");
                    document.getElementById(divId).style.backgroundColor = "red";
                }
            document.querySelectorAll('input[name=' + inputname +']').forEach(function(input) {
            input.disabled = true;
            });
            document.getElementById(submitButtonId).disabled = true;
            } else {
                alert("Please select an answer before submitting.");
            }
        });
}