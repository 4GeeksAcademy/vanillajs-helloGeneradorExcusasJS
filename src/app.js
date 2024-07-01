/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const excuse = document.getElementById("excuse");

window.onload = function() {
  //write your code here
  excuse.innerHTML = generateExcuse();
};

function generateExcuse() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  return `${who[randomIndex(who)]} ${action[randomIndex(action)]} ${
    what[randomIndex(what)]
  } ${when[randomIndex(when)]}`;
}

function randomIndex(arr) {
  return Math.floor(Math.random() * arr.length);
}
