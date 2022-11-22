//https://p5js.org/examples/arrays-array.html
//add array list of the assets I sketched and converted to pngs w illustrator
// let terrarium = [
//     {file: 'p/_-26', x: 400, y: 100}, 
//     {file: 'p/_-01.png', x:400, y: 100},
//     {file: 'p/_-02.png', x:400, y: 100},
//     {file: 'p/_-03.png', x:400, y: 100},
//     {file: 'p/_-04.png', x:400, y: 100},
//     {file: 'p/_-05.png', x:400, y: 100},
//     {file: 'p/_-06.png', x:400, y: 100},
//     {file: 'p/_-07.png', x:400, y: 100},
//     {file: 'p/_-08.png', x:400, y: 100},
//     {file: 'p/_-09.png', x:400, y: 100},
//     {file: 'p/_-10.png', x:400, y: 100},
//     {file: 'p/_-11.png', x:400, y: 100},
//     {file: 'p/_-12.png', x:400, y: 100},
//     {file: 'p/_-13.png', x:400, y: 100},
//     {file: 'p/_-14.png', x:400, y: 100},
//     {file: 'p/_-15.png', x:400, y: 100},
//     {file: 'p/_-16.png', x:400, y: 100},
//     {file: 'p/_-17.png', x:400, y: 100},
//     {file: 'p/_-18.png', x:400, y: 100},
//     {file: 'p/_-19.png', x:400, y: 100},
//     {file: 'p/_-20.png', x:400, y: 100},
//     {file: 'p/_-21.png', x:400, y: 100},
//     {file: 'p/_-22.png', x:400, y: 100},
//     {file: 'p/_-23.png', x:400, y: 100},
//     {file: 'p/_-24.png', x:400, y: 100},
//     {file: 'p/_-25.png', x:400, y: 100},    
   
// ];

let terrarium = [
    
        
            {
                "file": "p/_-26",
                "x": 400,
                "y": 100
            },
            {
                "file": "p/_-01.png",
                "x": 25,
                "y": 100
            },
            {
                "file": "p/_-02.png",
                "x": 325,
                "y": 25
            },
            {
                "file": "p/_-03.png",
                "x": 250,
                "y": 140
            },
            {
                "file": "p/_-04.png",
                "x": 775,
                "y": 50
            },
            {
                "file": "p/_-05.png",
                "x": 1005,
                "y": 45
            },
            {
                "file": "p/_-06.png",
                "x": 875,
                "y": 150
            },
            {
                "file": "p/_-07.png",
                "x": 50,
                "y": 250
            },
            {
                "file": "p/_-08.png",
                "x": 100,
                "y": 300
            },
            {
                "file": "p/_-09.png",
                "x": 250,
                "y": 250
            },
            {
                "file": "p/_-10.png",
                "x": 700,
                "y": 200
            },
            {
                "file": "p/_-11.png",
                "x": 975,
                "y": 225
            },
            {
                "file": "p/_-12.png",
                "x": 5,
                "y": 480
            },
            {
                "file": "p/_-13.png",
                "x": 160,
                "y": 415
            },
            {
                "file": "p/_-14.png",
                "x": 325,
                "y": 300
            },
            {
                "file": "p/_-15.png",
                "x": 325,
                "y": 475
            },
            {
                "file": "p/_-16.png",
                "x": 460,
                "y": 415
            },
            {
                "file": "p/_-17.png",
                "x": 630,
                "y": 410
            },
            {
                "file": "p/_-18.png",
                "x": 800,
                "y": 345
            },
            {
                "file": "p/_-19.png",
                "x": 800,
                "y": 485
            },
            {
                "file": "p/_-20.png",
                "x": 575,
                "y": 485
            },
            {
                "file": "p/_-21.png",
                "x": 685,
                "y": 530
            },
            {
                "file": "p/_-22.png",
                "x": 430,
                "y": 520
            },
            {
                "file": "p/_-23.png",
                "x": 175,
                "y": 505
            },
            {
                "file": "p/_-24.png",
                "x": 1055,
                "y": 490
            },
            {
                "file": "p/_-25.png",
                "x": 885,
                "y": 425
            }
        
]
let scale = 200
let images = [];
let ci = 23;
let bg;
let input = document.getElementById('ci')
function setup() {
    for(let i = 0; i < terrarium.length; i++){
        images[i] = loadImage(terrarium[i].file)
    }
    //https://p5js.org/examples/image-background-image.html
    //uploaded my own image
    bg = loadImage('300ppi/background_2.png');
    createCanvas(1200,677);{
  }
}

function draw(){
    background(bg);
    ci = input.value
    for(let i = 0; i < terrarium.length; i++){
    image(images[i], terrarium[i].x, terrarium[i].y)
 }
}
//p5js.org/reference/#/p5/keyPressed
//change ci to match plant assets
let move = 5
function keyPressed() {
    if (keyCode === LEFT_ARROW) {
      terrarium[ci].x -= move;
    } else if (keyCode === RIGHT_ARROW) {
        terrarium[ci].x += move;    }
    else if (keyCode === UP_ARROW) {
        terrarium[ci].y -= move;    }
    else if (keyCode === DOWN_ARROW) {
        terrarium[ci].y += move;    }
    
  }

  function keyTyped(){
    if (key === '=') {
        move += 5;    }
    else if (key === '-') {
        move -= 5;    }
  }

