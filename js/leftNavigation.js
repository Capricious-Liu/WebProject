/**
 * Created by liuzhili on 2017/5/18.
 */



var timer = null;
function startmove(target, speed) {
    var left_navigation = document.getElementById('leftNavigation');
    clearInterval(timer);
    timer = setInterval(function () {
        if (left_navigation.offsetLeft == target) {
            clearInterval(timer);
        }
        else {
            left_navigation.style.left = left_navigation.offsetLeft + speed + 'px';
        }
    }, 30)
}

function init_icons() {
    var save_icon = document.getElementById("save_icon");
    save_icon.addEventListener("click",saveData);
    var load_icon = document.getElementById("load_icon");
    load_icon.addEventListener("click",readData);
    var clock_icon = document.getElementById("clock_icon");
    clock_icon.addEventListener("click",hide_or_show_clock);
}


function mainNavigation() {
    var left_navigation =  document.getElementById('leftNavigation');
    left_navigation.onmouseover=function (){startmove(0,10);};
    left_navigation.onmouseout=function (){startmove(-150,-10);};
    init_icons();
}