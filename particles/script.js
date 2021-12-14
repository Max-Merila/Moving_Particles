const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const particlesArray = [];
window.addEventListener('resize', function(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
})

const mouse = {
  x: undefined,
  y: undefined,
}
canvas.addEventListener('click' , function(event){
    mouse.x = event.x;
    mouse.y = event.y;
});

canvas.addEventListener('mousemove', function(event){
  mouse.x = event.x;
  mouse.y = event.y;
})
class Particle {
  constructor(){
    //this.x = mouse.x;
    //this.y = mouse.y;
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 5 + 1;
    this.speedX = Math.random() * 3 -1.5;
    this.speedY = Math.random() * 3 -1.5;
  }
  update(){
    this.x += this.speedX;
    this.y += this.speedY;
  }
  draw(){
    ctx.fillStyle = 'blue';
    ctx.beginPath();
    ctx.arc(this.x, this.y, 50, 0, Math.PI * 2);
    ctx.fill();
  }
}
function init(){
  for(let i = 0; i < 100; i++){
    particlesArray.push(new Particle());
  }
}
init();

function handleParticles(){
  for (let i = 0; i < particlesArray.length; i++){
    particlesArray[i].update();
    particlesArray[i].draw();
  }
}


function animate(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  handleParticles();
   requestAnimationFrame(animate);
}

animate();


//2d vector for javascript
//update(){
//  this.x += this.speedX;
//  this.y += this.speedY;
//}


//this creates a paintbrush effect with the draw circle event
  //canvas.addEventListener('mousemove', function(event){
  //mouse.x = event.x;
  //mouse.y = event.y;
  //drawCircle();

//tracks where the mouse is clicked on x axis and y axis
  //const mouse = {
  //  x: null,
  //  y: null,
  //}
//event listener that tracks x and y on click
  //canvas.addEventListener('click' , function(event){
  //    mouse.x = event.x;
  //    mouse.y = event.y;
//draws circle on click where it is clicked
//    drawCircle();
//});

//the function of what appears on click location this time a blue circle
  //function drawCircle(){
  //  ctx.fillStyle = 'blue';
  //  ctx.beginPath();
  //  ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI * 2);
  //  ctx.fill();
  //}
  //drawCircle();


//drawing a blue circle with red outline/stoke color
//ctx.fillStyle = 'red';
//ctx.strokeStyle = 'red';
//ctx.lineWidth = 5;
//ctx.beginPath();
//ctx.arc(100, 100, 50, 0, Math.PI * 2);
//ctx.stroke();
//console.log(ctx);


//drawing a white rectangle
//ctx.fillStyle = 'white';
//ctx.fillRect(10, 20, 150, 50);


//making the white rectangle resize everytime we change screen size
//window.addEventListener('resize', function(){
  //canvas.width = window.innerWidth;
  //canvas.height = window.innerHeight;
//  ctx.fillStyle ='white';
//  ctx.fillRect(10, 20, 150, 50);
//})
