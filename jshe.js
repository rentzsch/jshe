"use strict";

console.log("jshe loaded");

/*

Mnemonic  | Function  | show code  | show result
---       | ---       | ---        | ---
eval      | jshe      | false      | true
code      | jshec     | true       | true
define    | jshed     | false      | false

*/

//
// main
//

if (document.readyState === "complete") {
  main();
} else {
  window.addEventListener("load", main);
}

function main() {
  // console.log("jshe main");
  // document.getElementById("debug").innerHTML = "jshe main";
  document
    .querySelectorAll(
      ".jshe, .language-jshe, .jshec, .language-jshec, .jshed, .language-jshed"
    )
    .forEach(function (el) {
      switch (el.className.trim()) {
        case "jshe":
        case "language-jshe":
          jshe(el);
          break;
        case "jshec":
        case "language-jshec":
          jshec(el);
          break;
        case "jshed":
        case "language-jshed":
          jshed(el);
          break;
        default:
          console.error(`jshe: unknown className ${el}`);
          break;
      }
    });
}

//
// jshe
//

function jshe(el) {
  console.log('jshe "' + el.innerHTML + '"');
  // document.getElementById("debug").innerHTML = 'evaling jshe "' + el.innerHTML + '"';
  let result;
  try {
    result = eval(el.innerHTML);
  } catch (ex) {
    console.error(ex);
  }
  if (result === undefined) result = "";
  el.innerHTML = result;
  // document.getElementById("debug").innerHTML = `${el.innerHTML} ${result}`;
}

//
// jshec
//

function jshec(el) {
  console.log('jshec "' + el.innerHTML + '"');
  let result;
  try {
    result = eval(el.innerHTML);
  } catch (ex) {
    console.error(ex);
  }
  if (result === undefined) result = "";
  try {
    result = JSON.stringify(result);
  } catch (ex) {}
  el.innerHTML = `${el.innerHTML}<div class="jshe-result">=> ${result}<div>`;
}

//
// jshed
//

function jshed(el) {
  // console.log('evaling jshed "' + el.innerHTML + '"');
  try {
    eval(el.innerHTML);
    el.parentNode.parentNode.removeChild(el.parentNode);
    // el.remove();
  } catch (ex) {
    console.error(ex);
  }
}

//
//
//

function jsheFormatResult(result) {
  if (result === undefined) result = "";
  try {
    result = JSON.stringify(result);
  } catch (ex) {}
}
