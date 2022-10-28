const nButtonArea = document.querySelector(".numbers")
const opButtonArea = document.querySelector(".operations")

let nButtons = [7,8,9,4,5,6,1,2,3,0,"."];
let opButtons = ["CLEAR","+","-","*","/","ENTER"]

nButtons.forEach(button=>{
    let newButton = document.createElement("div");
    newButton.textContent = button;
    newButton.classList.add(`numb${button}`);
    nButtonArea.appendChild(newButton);

});

opButtons.forEach(button=>{
    let newButton = document.createElement("div");
    newButton.textContent = button;
    newButton.classList.add(`op${button}`);
    opButtonArea.appendChild(newButton);
});