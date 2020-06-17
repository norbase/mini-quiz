const questions = [
  ["How many Disney resorts are there in the U.S.?", 2],
  ["What is Mickey Mouse's significant other's full name?", "MINNIE MOUSE"],
  ["Who is Goofy's son?", "MAX"],
  ["What animal is Daisy?", "DUCK"],
  ["What city in Japan is the Disney resort located in?", "TOKYO"],
  ["'Tooncity' is one of the attractions at Disneyland. (True or False?)", "FALSE"]
];

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

function buildList(arr) {
 var listHTML = '<ol>';
  for (var i = 0; i < arr.length; i++) {
    listHTML += '<li>' + arr[i] + '</li>';
  }
  listHTML += '</ol>';
  return listHTML;
}

let correctAnswers = 0;
let correct = [];
let wrong = [];

for (var i = 0; i < questions.length; i++) {
  let question = questions[i][0];
  let answer = questions[i][1];
  let response = prompt(question);
  if (typeof answer !== "string") {
    response = parseInt(response);
  }
  if (typeof answer === "string") {
    response = response.toUpperCase();
  }
  if (response === answer) {
    correctAnswers += 1;
    correct.push(question);
  } else {
    wrong.push(question);
  }
}

let html = `You got ${correctAnswers} question(s) right.`;
html += '<h2>You got these questions correct:</h2>';
html += buildList(correct);
html += '<h2>You got these questions wrong:</h2>';
html += buildList(wrong);
print(html);