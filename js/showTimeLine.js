/**
 * Created by liuzhili on 2017/6/19.
 */



function createSingleItem() {
    var block = document.createElement("div");
    block.classList.add("cd-timeline-block");

    var img = document.createElement("div");
    img.classList.add("cd-timeline-img");
    img.classList.add("cd-picture");
    var img_src = document.createElement("img");
    img_src.src = "assets/img/timeLine/cd-icon-picture.svg";
    img_src.alt = "Picture";
    img.appendChild(img_src);

    block.appendChild(img);


    return block;
}

function showTimeLine(){

    var last_time = null;
    var last_content = null;
    for(var i=0;i<storge.length;i++){
        var id = storge.key(i);
        if(id == 'colorValue') continue;

        var value = storge.getItem(id);
        var obj = JSON.parse(value);

        var h2_content = document.createElement("h2");
        h2_content.innerHTML = obj.msg;
        if(obj.value == false){
            h2_content.style.color = 'pink';
        }

        if(last_time === null){
            last_content = document.createElement("div");
            last_content.classList.add("cd-timeline-content");
            last_content.appendChild(h2_content);
            last_time = obj.time.split("T")[0];
            continue;
        }


        if(obj.time.split("T")[0] != last_time && i != storge.length -1 ){
            var block = createSingleItem();

            var time_block = document.createElement("span");
            time_block.classList.add("cd-date");
            time_block.innerHTML = last_time.split("T")[0];

            last_content.appendChild(time_block);
            block.appendChild(last_content);
            document.getElementById("cd-timeline").appendChild(block);

            last_content = document.createElement("div");
            last_content.classList.add("cd-timeline-content");
            last_time = obj.time.split("T")[0];
        }

        if(obj.time.split("T")[0] == last_time && i != storge.length -1){
            last_content.appendChild(h2_content);
        }

        if(i == storge.length -1 && obj.time.split("T")[0] == last_time ){
            last_content.appendChild(h2_content);
            var block = createSingleItem();

            var time_block = document.createElement("span");
            time_block.classList.add("cd-date");
            time_block.innerHTML = last_time.split("T")[0];

            last_content.appendChild(time_block);
            block.appendChild(last_content);
            document.getElementById("cd-timeline").appendChild(block);
        }
        if(i == storge.length -1 && obj.time.split("T")[0] != last_time){
            var block = createSingleItem();

            var time_block = document.createElement("span");
            time_block.classList.add("cd-date");
            time_block.innerHTML = last_time.split("T")[0];

            last_content.appendChild(time_block);
            block.appendChild(last_content);
            document.getElementById("cd-timeline").appendChild(block);

            last_content = document.createElement("div");
            last_content.classList.add("cd-timeline-content");
            last_content.appendChild(h2_content);

            var block = createSingleItem();

            var time_block = document.createElement("span");
            time_block.classList.add("cd-date");
            time_block.innerHTML = last_time.split("T")[0];

            last_content.appendChild(time_block);
            block.appendChild(last_content);
            document.getElementById("cd-timeline").appendChild(block);
        }


    }
}