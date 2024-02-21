let btn= document.querySelectorAll(".box");
let turn0 = true;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,5,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]

const enableBoxes =()=>{
    for(let box of btn){
        box.disabled = false;
        box.innerText= "";
        document.getElementById("msg").innerText="";
    }
};
document.getElementById("btn").addEventListener("click",()=>{
    turn0 = true;
    enableBoxes(); 
});
btn.forEach((box)=>{
box.addEventListener("click",()=>{
    if(turn0){
    box.innerText="0";
    turn0 = false;
    
}
else
{
    box.innerText = "x";
    turn0 = true;
}
box.disabled = true;    
winner();     
})
})
const disableBoxes =()=>{
    for(let box of btn){
        box.disabled = true;
    }
}
const showWinner=(winner)=>{
    document.getElementById("msg").innerText=`winner is ${winner}`;
}
const winner = () =>
{
    for( let pattern of winPatterns){
        let pos1val = btn[pattern[0]].innerText;
        let pos2val = btn[pattern[1]].innerText;
        let pos3val = btn[pattern[2]].innerText;

        if(pos1val !="" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val)
            {
                console.log("winner",pos1val)
                disableBoxes();
                showWinner(pos1val);
            }
        }
    }
};
