var x, y,ran;
circles = []
var keyData = {
    a: {
        color : "#83bdc8",
        sound : new Howl({
         src: ['assets/sounds/bubbles.mp3']
        })
    },
    b: {
        color : "#567aac",
        sound : new Howl({
         src: ['assets/sounds/clay.mp3']
        })
    },
    c: {
        color : "#0249b8",
        sound : new Howl({
         src: ['assets/sounds/confetti.mp3']
        })
    },
    d: {
        color : "#4b2942",
        sound : new Howl({
         src: ['assets/sounds/corona.mp3']
        })
    },
    e: {
        color : "#eac9c5",
        sound : new Howl({
         src: ['assets/sounds/dotted-spiral.mp3']
        })
    },
   f : {
        color : "#900673",
        sound : new Howl({
         src: ['assets/sounds/flash-1.mp3']
        })
    },
    g: {
        color : "#db8467",
        sound : new Howl({
         src: ['assets/sounds/flash-2.mp3']
        })
    },
   h : {
        color : "#ae28e8",
        sound : new Howl({
         src: ['assets/sounds/flash-3.mp3']
        })
    },
   i : {
        color : "#c60db9",
        sound : new Howl({
         src: ['assets/sounds/glimmer.mp3']
        })
    },
   j : {
        color : "#2e2844",
        sound : new Howl({
         src: ['assets/sounds/moon.mp3']
        })
    },
   k : {
        color : "#0b24b5",
        sound : new Howl({
         src: ['assets/sounds/pinwheel.mp3']
        })
    },
   l : {
        color : "#3ba941",
        sound : new Howl({
         src: ['assets/sounds/piston-1.mp3']
        })
    },
   m : {
        color : "#1e435b",
        sound : new Howl({
         src: ['assets/sounds/piston-2.mp3']
        })
    },
   n : {
        color : "#01b12a",
        sound : new Howl({
         src: ['assets/sounds/piston-3.mp3']
        })
    },
    o: {
        color : "#caec28",
        sound : new Howl({
         src: ['assets/sounds/prism-1.mp3']
        })
    },
   p : {
        color : "#9d4773",
        sound : new Howl({
         src: ['assets/sounds/prism-2.mp3']
        })
    },
    q: {
        color : "#93618f",
        sound : new Howl({
         src: ['assets/sounds/prism-3.mp3']
        })
    },
    r: {
        color : "#7ceb59",
        sound : new Howl({
         src: ['assets/sounds/splits.mp3']
        })
    },
   s : {
        color : "#D00000",
        sound : new Howl({
         src: ['assets/sounds/squiggle.mp3']
        })
    },
    t: {
            color : "#B00000",
            sound : new Howl({
             src: ['assets/sounds/strike.mp3']
            })
        },
    u: {
        color : "669999",
        sound : new Howl({
         src: ['assets/sounds/suspension.mp3']
        })
    } ,
    v: {
        color : "CC0099",
        sound : new Howl({
         src: ['assets/sounds/timer.mp3']
        })
    },
   w : {
        color : "FFCC33",
        sound : new Howl({
         src: ['assets/sounds/ufo.mp3']
        })
    },
   x : {
        color : "CCFF00",
        sound : new Howl({
         src: ['assets/sounds/veil.mp3']
        })
    },
    y: {
        color : "999900",
        sound : new Howl({
         src: ['assets/sounds/wipe.mp3']
        })
    },
    z: {
        color : "66FFFF",
        sound : new Howl({
         src: ['assets/sounds/zig-zag.mp3']
        })
    }
}

function onKeyDown(event) {
    if(keyData[event.key]) {
        x = Math.floor(Math.random() * view.size.width);
        y = Math.floor(Math.random() * view.size.height);
        var circle = new Path.Circle(new Point(x,y), 150);
        circle.fillColor = keyData[event.key].color;
        keyData[event.key].sound.play();
        circles.push(circle);
        }
}
function onMouseDown(event) {
    x = event.point["x"];
    y = event.point["y"]
    ran = String.fromCharCode(97 +Math.floor(Math.random()* 26 ))
    var circle = new Path.Circle(new Point(x,y), 150);
    circle.fillColor = keyData[ran].color;
    keyData[ran].sound.play();
    circles.push(circle);
}

function onFrame(event) {
    for (var i=0; i<circles.length;i++){
        circles[i].fillColor.hue += 1;
        circles[i].scale(0.93);
    }
    }
