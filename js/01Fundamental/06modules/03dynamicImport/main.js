
// dynamic import
let mathObj = await import("./common/math.js");

let pi = mathObj.default;       // export default module
let { sum, sub } = mathObj;     // export modules


function mainFun() {
    let html = "";

    html += `<div style="margin: 0 20%;">`
    html += `<div style="margin-top: 100px;"></div>`;
    html += `<h1>DYNAMIC IMPORT</h1>`;
    html += `<h2>export default module</h2>`;
    html += `<p>PI: ${pi()}</p>`;
    
    html += `<div style="margin-top: 50px;"></div>`;
    html += `<h2>export modules</h2>`;
    html += `<p>sum(10, 10): ${sum(10, 10)}</p>`;
    html += `<p>sub(50, 20): ${sub(50, 20)}</p>`;
    html += `</div>`;
    
    let root = document.querySelector("#root");
    root.innerHTML = html;
}

mainFun();
