

function addDiv () {
    let newDiv = document.createElement("div");
    let currentDiv = document.getElementById("main");
    let comment = document.createComment("");
    currentDiv.appendChild(newDiv);
    newDiv.appendChild(comment);
    newDiv.setAttribute("class","square")
    
    newDiv.style.width = (100-2)+"px";
    newDiv.style.height= (100-2)+"px";
    newDiv.addEventListener("mouseenter", () => {
        newDiv.style.background = "black";
    })

}

function reset () {
    let s = document.getElementsByClassName("square") 

    for (let i=0; i<s.length; i++){
        s[i].style.background="white"
    }
    
}

function test() {
    let amount = prompt("How many squares would you like the square to be?")
    let side = 400/amount
    let s = document.getElementsByClassName("square");

    while(s.length>0){
        s[0].parentNode.removeChild(s[0]);
    }

    for(let i =0; i<amount*amount; i++){
        let newDiv = document.createElement("div");
        let currentDiv = document.getElementById("main");
        let comment = document.createComment("");
        
        newDiv.style.width = (side-2)+"px";
        newDiv.style.height= side-2+"px";
        currentDiv.appendChild(newDiv);
        newDiv.appendChild(comment);
        newDiv.setAttribute("class","square")

        newDiv.addEventListener("mouseenter", () => {
            newDiv.style.background = "black";
        })
    }
    

}

for(let i = 0; i<16; i++){
    addDiv();   
}


