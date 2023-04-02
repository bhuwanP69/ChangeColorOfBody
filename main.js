//get element from dom 
let btn = document.getElementById('jsBtn');

// add a event listener
btn.addEventListener('click',changeColor);

//function to change color
function changeColor(){
    let colors = ['red' ,'blue','green','#362e1f','yellow','#93b81c','#73d134','#0ced10','#8ba1ad','#6c91cc'];
let random_color = colors[Math.floor(Math.random()*colors.length)];  

 document.body.style.backgroundColor = random_color;
 
}