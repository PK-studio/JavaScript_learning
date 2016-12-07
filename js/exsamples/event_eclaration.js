//CSS example code
// <ul id="parentElement">
//     <li></li>
//     <li></li>
//     <li></li>
// </ul>

parentElement.addEventListener('click', ourAction);

function ourAction(e){
    if(e.target && e.target.nodeName == "LI"){
        //...do something
    }
}
