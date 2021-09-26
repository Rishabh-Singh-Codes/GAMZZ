let [computer_score, user_score] = [0,0];

let result_ref = document.getElementById("result");
let choices_object = {
    'rock' : {
        'rock' : 'draw',
        'scissor' : 'win', 
        'paper' : 'lose'
    },
    'paper' : {
        'rock' : 'win',
        'scissor' : 'lose', 
        'paper' : 'draw'
    },
    'scissor' : {
        'rock' : 'lose',
        'scissor' : 'draw', 
        'paper' : 'win'
    }

}

function checker(input){
    var choices = ["rock", "paper", "scissor"];
    var num = Math.floor(Math.random()*3);

    document.getElementById('comp_choice').innerHTML = `Computer chose <span>${choices[num].toUpperCase()}</span>`;

    document.getElementById("user_choice").innerHTML = `You chose <span>${input.toUpperCase()} </span>`;

    let computer_choice = choices[num];

    switch(choices_object[input][computer_choice]){
        case 'win':
            result_ref.innerHTML = "YOU WIN";
            result_ref.style.cssText = "color: rgb(192, 70, 248)"
            user_score++;
            break;
        case 'lose':
            result_ref.innerHTML = "YOU LOOSE";
            result_ref.style.cssText = "color: red"
            computer_score++;
            break;
        default:
            result_ref.innerHTML = "IT'S A DRAW";
            result_ref.style.cssText = "color: blue"
            break;
    }

    document.getElementById("computer_score").innerHTML = computer_score;
    document.getElementById("user_score").innerHTML = user_score;

}