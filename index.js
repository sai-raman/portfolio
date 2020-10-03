var canvas = document.querySelector('canvas');
var greeting = document.getElementById('greeting');
console.log(greeting);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


var c = canvas.getContext("2d");



function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = 'white';
        c.stroke();
    }

    this.update = function () {
        console.log(innerHeight)
        if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > window.innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }

}



var circleArray = [];

for (var i = 0; i < 50; i++) {
    var radius = 30;
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dy = (Math.random() - 0.5) * 2;
    var dx = (Math.random() - 0.5) * 2;

    circleArray.push(new Circle(x, y, dx, dy, radius))

}


function animate() {
    this.animation = requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
}


function stopAnimation() {
    cancelAnimationFrame(this.animation);
}


// var lineArray = [];

// for (var i = 0; i < 50; i++) {
//     var x = Math.random() * (innerWidth - radius * 2) + radius;
//     var y = Math.random() * (innerHeight - radius * 2) + radius;
//     var dy = (Math.random() - 0.5) * 4;
//     var dx = (Math.random() - 0.5) * 4;

//     circleArray.push(new Circle(x, y, dx, dy, radius))

// }




// function Line(start, end, x, y, dx, dy) {
//     this.x = x;
//     this.y = y;
//     this.start = start;
//     this.end = end;
//     this.dx = dx;
//     this.dy = dy;

//     this.draw = function () {
//         c.beginPath();
//         c.moveTo(this.start, this.end);
//         c.lineTo(this.x, this.y);
//         c.stroke();
//         c.beginPath();
//         c.arc(300, 150, 2, 0, Math.PI * 2, false);
//         c.strokeStyle = 'white';
//         c.fill();
//         c.stroke();
//     }

//     this.update = function () {

//     }
// }


// greeting.style.top = window.innerHeight / 2;
animate();


// var name = 'Sai Raman Kilambi';
// var greeting = `Hello, I am ${name}`;
// c.font = "30px Arial";
// c.fillText(greeting, window.innerWidth / 2, window.innerHeight / 2);
