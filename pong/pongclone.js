var animate = window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function(callback) { window.setTimeout(callback, 1000/60) };

var canvas = document.createElement('canvas');
var width = 400;
var height = 600;
canvas.width = width;
canvas.height = height;
var context = canvas.getContext('2d');


window.onload = function() {
    document.body.appendChild(canvas);
    animate(step);
};

var step = function() {
    update();
    render();
    console.log('stepped');
    animate(step);
};

var update = function() {
    ball.update(player.paddle, computer.paddle);
};

var player = new Player();
var computer = new Computer();
var ball = new Ball(200, 300);

var render = function() {
    context.fillStyle = "#000000";
    context.fillRect(0, 0, width, height);
    ball.render();
    player.render();
    computer.render();
};

function Paddle(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.x_speed = 0;
    this.y_speed = 0;
};

 Paddle.prototype.render = function() {
     context.fillRect(this.x, this.y, this.width, this.height);
     context.fillStyle = "#ffffff";
 };

 function Player() {
     this.paddle = new Paddle(175, 580, 50, 10);
 };

 function Computer() {
     this.paddle = new Paddle(175, 20, 50, 10);
 };

 Player.prototype.render = function() {
     this.paddle.render();
 };

 Computer.prototype.render = function() {
     this.paddle.render();
 };

 function Ball(x, y) {
     this.x = x;
     this.y = y;
     this.y_speed = 3;
     this.x_speed = 0;
     this.radius = 5;
 };

Ball.prototype.render = function() {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 2 * Math.PI, false);
    context.fillStyle = "#ffffff";
    context.fill();
};

Ball.prototype.update = function(paddle1, paddle2) {
    this.x += this.x_speed;
    this.y += this.y_speed;
    var r = this.radius;
    var bottom_x = this.x - r;
    var top_x = this.x + r;
    var bottom_y = this.y - r;
    var top_y = this.y + r;

    if (bottom_x < 0) {
        this.x = r;
    } else if (top_x > width) {
        this.x = width - r;
    }

    if (this.y < 0 || this.y > height) {
        this.x_speed = 0;
        this.y_speed = 3;
        this.x = width / 2;
        this.y = height / 2;
    }

};
