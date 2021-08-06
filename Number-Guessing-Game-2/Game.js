var num = Math.floor(Math.random() * 100 + 1);
var numGuess = 1;

document.getElementById("submitGuess").onclick = function () {
    var userGuess = document.getElementById("guessField").value;

    if (userGuess.length == 0) {
        alert("Enter something. The input is empty right now.");
    } else {
        if (!isNaN(userGuess)) {
            if (userGuess > 100 || userGuess < 0) {
                alert("Enter values in the given range only.");
            } else {
                if (userGuess == num) {
                    if (numGuess == 1) {
                        document.getElementById("result").innerHTML += `You got it in the first attempt itself.<br>`;
                    } else {
                        document.getElementById("result").innerHTML += `You got it right. It only took ${numGuess} attempts<br>`;
                    }
                } else if (userGuess > num) {
                    numGuess++;
                    alert("Your guess is bigger than actual number, try again with a lower number.");
                } else {
                    numGuess++;
                    alert("Your guess is smaller than actual number, try again with a bigger number.");
                }
            }
        } else {
            alert("Please enter numerical values only.")
        }
    }
}