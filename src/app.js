/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { clippingParents } from "@popperjs/core";

/*window.onload = function() {
  //write your code here
  let randomNumber = Math.random() * 10;
  document.querySelector("#excuse").innerHTML = randomNumber;
  console.log("Hello Rigo from the console!", randomNumber);
};*/

window.onload = function() {
  document.querySelector("#button").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });
  //write your code here
  console.log("Hello Rigo from the console!");

  let excusePhrase = document.getElementById("excuse");
  console.log({ excusePhrase });
};

let generateExcuse = () => {
  let pronoun = ["A", "The"];
  let subject = ["jogger", "racoon", "dog", "driver", "comedian", "pincone"];
  let action = ["took my", "threw my", "yelled at my", "stole my", "bit my"];
  let possetion = ["homework", "toe", "car", "shoe"];
  let where = ["on the street", "in my house", "in my driveaway"];

  let proIndex = Math.floor(Math.random() * pronoun.length);
  let subjtIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let possetionIndex = Math.floor(Math.random() * possetion.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return (
    pronoun[proIndex] +
    " " +
    subject[subjtIndex] +
    " " +
    action[actionIndex] +
    " " +
    possetion[possetionIndex] +
    " " +
    where[whereIndex]
  );
};
