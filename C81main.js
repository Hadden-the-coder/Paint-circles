var mouseEvent="empty";
var last_position_x,last_position_y;
canvas=document.getElementById("My_canvas");
ctx=canvas.getContext("2d");
color="black";
width_of_line=1;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouseEvent="mousedown";
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_off_line").value;
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseup";
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_position_of_x=e.clientX-canvas.offsetLeft;
    current_position_of_y=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        console.log("x="+last_position_x+"y="+last_position_y);
        ctx.moveTo(last_position_x,last_position_y);
        circle(last_position_x,last_position_y);
        //ctx.lineTo(current_position_of_x,current_position_of_y);
        ctx.stroke();
    }
    last_position_x=current_position_of_x;
    last_position_y=current_position_of_y;
}
function cleararea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}
function circle(mousex,mousey){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=2;
    ctx.arc(mousex,mousey,40,0,2*Math.PI);
    ctx.stroke();
}