function get_paragraph1(){
var input=[];
for(var i=1;i<=6;i++){
    input.push(document.getElementById("para1_box"+i).value);
}
input.join(". ");
document.getElementById("show_para1").innerHTML=input.join(". ");
}
function get_paragraph2(){
    var input=[];
    for(var i=1;i<=6;i++){
        input.push(document.getElementById("para2_box"+i).value);
    }
    input.join(". ");
    document.getElementById("show_para2").innerHTML=input.join(". ");
    }