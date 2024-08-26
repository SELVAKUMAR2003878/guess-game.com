var input=document.getElementById("input1");
var inputvalue=input.value;
var overlay=document.querySelector(".overlay")
var runscore=document.getElementById("score")
var overlaytext=document.getElementById("text")
var popscore=document.getElementById("pscore")

function correct() {

    var rand=Math.random()
    var change=Math.floor((rand *10) +1)
    console.log(input.value)
    if(input.value == 0) {
        alert("inputbox is Empty")
    }
    else{
        if(change == inputvalue)  {
            overlay.style.display="block";
            var poscore= Number(popscore.textContent) +50;
            win();
            popscore.textContent = poscore;
            var increase = Number(runscore.textContent) +1;
            runscore.textContent = increase
        }
    
        if(change != inputvalue) {
            var subract = Number(runscore.textContent) -1;
            runscore.textContent = subract
        }
    
        if(Number(runscore.textContent) == 0) {
            overlaytext.textContent = "Your guess is inCorrect"
            overlay.style.display="block";
            loose();
            load(800)
        }
    }
    console.log(change)
    console.log(input.value)
    
}

function win() {
    let audio = new Audio("audio/win.mp3");
    audio.play()
}

function loose() {
    let audio = new Audio("audio/loose.mp3");
    audio.play()
}

function cancel() {
    overlay.style.display="none";
}

// reload function 
function load(time) {
    
    setTimeout("location.reload(true);",time)

}
