/**
 * Created by liuzhili on 2017/5/20.
 */


// function saveCurrentItem(id, msg_current){
//     var oDate = new Date();
//     var item = {
//         msg:msg_current,
//         time:oDate
//     };
//     // console.log(JSON.stringify(item));
//     storge.setItem(id, JSON.stringify(item));
//     console.log(storge);
// }


// 这里要存json文件
function saveData() {
   // var data = [];
   storge.clear();
    var todolists = $My('.todo-list').childNodes;
    //return storge;
    for (var temp =0;temp<todolists.length;temp++){
        var id = todolists[temp].id;
        var view = todolists[temp].firstChild;
        var label = view.getElementsByClassName('todo-label')[0];

        var msg = label.innerHTML;
        var value = todolists[temp].classList.contains("completed");

        var oDate = new Date();
        var item = {
            msg:msg,
            time:oDate,
            value:value
        };

        storge.setItem(id, JSON.stringify(item));
        console.log(storge);

        //storge.setItem(msg,value);
        //data[msg] = todolists[temp].classList.contains('completed');
    }
    return storge;
}

function readData() {
    //storge.clear();
    var todolists = $My('.todo-list').childNodes;
    // if(todolists.length>0){
    //     if(!window.confirm('This will delete your current items if you haven`t save them. Are you sure?')){
    //         return;
    //     }

    for(var i=0;i<storge.length;i++){
        var id = storge.key(i);
        if(id == 'colorValue') continue;

        var value = storge.getItem(id);
        var obj = JSON.parse(value);

        var current_id = addTodo(obj.msg);
        if(obj.value == true){
            updateTodo(current_id,true);
        }
    }
}