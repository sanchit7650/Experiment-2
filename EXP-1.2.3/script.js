let svg = document.getElementById("canvas");
let color = document.getElementById("color");
let shapes = [];

svg.addEventListener("click", function(e){
    let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");

    circle.setAttribute("cx", e.offsetX);
    circle.setAttribute("cy", e.offsetY);
    circle.setAttribute("r", 10);
    circle.setAttribute("fill", color.value);

    svg.appendChild(circle);
    shapes.push(circle);
});

function undo(){
    if(shapes.length > 0){
        svg.removeChild(shapes.pop());
    }
}
