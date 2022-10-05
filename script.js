const message1 = document.querySelector("#message1");
const message2 = document.querySelector("#message2");
const message3 = document.querySelector("#message3");
const message4 = document.querySelector("#message4");

document.getElementById("submit").addEventListener("click", (e) => {
    e.preventDefault();
    check();
    document.getElementById("input").value = "";
});

const random = Math.floor(Math.random() * 100) + 1;
var count = 0;
var guessed_nums = [];
var max_trials=10;


function update() {
    var menu = document.getElementById("level");
    var level = menu.options[menu.selectedIndex].value;

    if (level == "easy") {
        max_trials = 10;
        message3.textContent = "You have only 10 chances";
    }

    else if (level == "medium") {
        max_trials = 7;
        message3.textContent = "You have only 7 chances";
    }

    else if (level == "hard") {
        max_trials = 5;
        message3.textContent = "You have only 5 chances";
    }

    count=0;
    guessed_nums=[];
}

function check() {
    let input = document.getElementById("input").value;
    input = Math.floor(input);

    if (input < 1 || input > 100) {
        alert("Number should be within 1-100");
        return;
    }

    guessed_nums.push(input);
    count++;

    if (input == random) {
        message1.textContent = "Congratulations, You have won!🙂";
        message2.textContent = "You guessed it in " + count + " trials!";
        message3.textContent = "Number was " + random;
        message4.textContent = "Thanks for Playing! Kindly refresh page to play again.";
        document.getElementById("submit").disabled = true;
    }

    else if (count == max_trials) {
        message1.textContent = "Number of trials: " + count;
        message2.textContent = "Guessed numbers: " + guessed_nums;
        message3.textContent = "Sorry, You have crossed trial limits!☹️ Kindly refresh Page to play again.";
        message4.textContent = "The number was " + random;
        document.getElementById("submit").disabled = true;
    }

    else {
        if (input < random) {
            message1.textContent = "Your guess is too low!";
            message2.textContent = "Number of trials:" + count;
            message3.textContent = "Guessed numbers: " + guessed_nums;
        }
        if (input > random) {
            message1.textContent = "Your guess is too high!";
            message2.textContent = "Number of trials:" + count;
            message3.textContent = "Guessed numbers: " + guessed_nums;
        }
    }
}
