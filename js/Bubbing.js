window.onload = function(){
    // document.onclick = function(){
    // alert("点击");
    document.getElementById("Father").onclick = function(){
        alert("我是Father");
        event.cancelBubble = true;
    }
    document.getElementById("grandFather").onclick = function(){
        alert("我是grandFather");
        event.cancelBubble = true;
    }
    document.getElementById("son").onclick = function(){
        alert("我是son");
        event.cancelBubble = true;
    }
}
