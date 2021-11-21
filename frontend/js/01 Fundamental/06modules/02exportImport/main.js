import * as math from "./common/math.js";
import message, { sayHi, bye as sayBye } from "./common/message.js";


function h5(mess) {
    return `<h5>${mess}</h5>`;
}

function h1(mess) {
    return `<h1>${mess}</h1>`;
}

function score(name) {
    let nameLen = name.length;
    let nameScore = math.sum(nameLen, 0);
    let nameScoreStr = String(nameScore);
    return h5(nameScoreStr);
}

function myMess(name) {
    return h5(sayHi(name));
}

function mainFun() {
    let container = "<div class='container my-4'>";
    let row = "<div class='row'>";
    let col = "<div class='col-6'>";
    let endDiv = "</div>";

    let html = "";
    html += container; // start container

    html += row;
    html += col + h1("MESSAGE") + endDiv;
    html += col + h1("SCORE") + endDiv;
    html += endDiv;

    let users = ["rahim", "mr jio", "ram", "mrs. shith", "indu"];
    for (let i=0; i<users.length; i++) {
        let user = users[i];

        html += row;    // start row
        html += col + myMess(user) + endDiv; // 1'st col
        html += col + score(user) + endDiv; // 2'nd col
        html += endDiv; // end row
    }
    html += endDiv; // end container

    let root = document.querySelector("#root");
    root.innerHTML = html;
}


mainFun();
