/*
01) The <div> DOM node?
02) The <ul> DOM node?
03) The second <li> (with: 2'nd link)?
*/

// 01
let firstDiv1 = document.body.firstElementChild;
let firstDiv2 = document.body.children[0];
let firstDiv3 = document.body.childNodes[1];

// 02
let firstUL1 = document.body.children[1];
let firstUL2 = document.body.lastElementChild?.previousElementSibling;
let firstUL3 = document.body.firstElementChild?.nextElementSibling;

// 03
let secondLi1 = document.body.children[1].lastElementChild;
let secondLi2 = document.body.firstElementChild?.nextElementSibling?.lastElementChild;

/*
here html:
----------
<body>
    <div>First div</div>
    <ul>
        <li>1'st link</li>
        <li>2'nd link</li>
    </ul>

    <script src="./main.js"></script>
</body>
*/


/*
NB:
all nodes    : parentNode, childNodes, firstChild, lastChild, previousSibling, nextSibling
element nodes: parentElement, children, firstElementChild, lastElementChild, previousElementSibling, nextElementSibling
*/