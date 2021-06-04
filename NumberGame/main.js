let btn=document.getElementById('btn');
let output=document.getElementById('output');
let faceimage=document.getElementById('i');

let number =[Math.floor(Math.random()*100)];

btn.addEventListener('click', function(){
    let input=document.getElementById('userinput').value;

    if (input==number){
        output.innerHTML='You guessed right!! your number was '+number;
		faceimage.src='images/smiley.png';
    }else if(input<number){
        output.innerHTML='You guessed too low!';
		faceimage.src='images/crying-face.png';
    }
    
    if(input>number){
        output.innerHTML='You guessed too high!';
    }
    console.log(number);                                                        

}
)