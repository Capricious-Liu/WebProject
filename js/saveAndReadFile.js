/**
 * Created by liuzhili on 2017/5/20.
 */

function saveData() {
   // var data = [];
   storge.clear();
    var todolists = $My('.todo-list').childNodes;
    //return storge;
    for (var temp =0;temp<todolists.length;temp++){
        var view = todolists[temp].firstChild;
        var label = view.getElementsByClassName('todo-label')[0];
        var msg = label.innerHTML;
        var value = todolists[temp].classList.contains("completed");
        storge.setItem(msg,value);
        //data[msg] = todolists[temp].classList.contains('completed');
    }
    return storge;
}

function readData() {
    //storge.clear()
    var todolists = $My('.todo-list').childNodes;
    // if(todolists.length>0){
    //     if(!window.confirm('This will delete your current items if you haven`t save them. Are you sure?')){
    //         return;
    //     }

    for(var i=0;i<storge.length;i++){
        var msg = storge.key(i);
        if(msg == 'colorValue') continue;// }
        var value = storge.getItem(msg);
        var current_id = addTodo(msg);
        if(value == 'true'){
            updateTodo(current_id,true);
        }
    }
}