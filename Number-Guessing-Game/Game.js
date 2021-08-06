const num = Math.floor(Math.random() * 100);

var userNum = prompt("What do you think it is : ");

while (userNum != num) {
    if (userNum < num) {
        alert("The number you entered is smaller.")
        userNum = prompt("Enter a larger number");
    } else {
        alert("The number you entered is larger. ");
        userNum = prompt("Enter s smaller number");
    }
}

if (userNum == num) {
    alert(`Congratulations, ${userNum} was in fact the correct number.`);
}