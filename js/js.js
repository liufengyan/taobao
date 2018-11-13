window.onload = function() {
    // document.getElementById("message").style.display = "none";
//     document.getElementById("bt1").onclick = function(){
//         document.getElementById("message").style.display = "block";
//          event.cancelBubble = true;
//     }
// document.onclick = function(){
//     document.getElementById("message").style.display = "none";
// }
    var newPText = document.createElement("input");
    document.body.appendChild(newPText);
    newPText.setAttribute("type", "button");
    newPText.setAttribute("value", "家电");
    var message = document.createElement("div");
    message.setAttribute("style", "widht:400px;height:400px;border: 1px solid black;");
    document.body.appendChild(message);
    var ul1 = document.createElement("ul");
    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    var li3 = document.createElement("li");
    var li4 = document.createElement("li");
    message.appendChild(ul1);
    message.style.display = "none";
    ul1.appendChild(li1);
    li1.appendChild(document.createTextNode("吹风机"));
    ul1.setAttribute("style", "display:inline");
    ul1.appendChild(li2);
    li2.appendChild(document.createTextNode("足浴盆"));
    ul1.appendChild(li3);
    li3.appendChild(document.createTextNode("蓝牙耳机"));
    ul1.appendChild(li4);
    li4.appendChild(document.createTextNode("电热毯"));

    newPText.onmouseover = function () {
        start()
    }

    newPText.onmouseout = function () {
        stop()
    }
    message.onmouseover = function () {
        start()
    }
    message.onmouseout = function () {
        stop()
    }

    function start() {
        message.style.display = "block";
    }

    function stop() {
        message.style.display = "none";
    }

}