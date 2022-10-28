const nButtonArea = document.querySelector(".numbers")

let nButtons = [7,8,9,4,5,6,1,2,3,0,"."];
let opButtons = ["+","-","*","/","Clear","Enter"]

nButtons.forEach(button=>{
    let newButton = document.createElement("div");
    newButton.textContent = button;
    newButton.classList.add(`numb${button}`);
    nButtonArea.appendChild(newButton);

});