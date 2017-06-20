/**
 * Created by liuzhili on 2017/5/18.
 */

function icon_init() {
    var save = document.getElementById('save_icon');
    //save.style.backgroundImage =
}




window.onload = function () {
    mainNavigation();
    todos_init();
    clock_init();
    readData();
    showTimeLine();
    //storge.clear();
};

window.onunload = function () {
    saveData();
};