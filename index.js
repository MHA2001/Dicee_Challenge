
function refresh(){
    player1 = Math.floor(Math.random()*6+1);
    player2 = Math.floor(Math.random()*6+1);
    document.querySelector(".img1").setAttribute("src" , "./images/dice"+player1+".png");
    document.querySelector(".img2").setAttribute("src" , "./images/dice"+player2+".png");
    if (player1 == player2){
        document.getElementsByTagName("h1")[0].innerText = "Draw !";

    }
    else if (player1>player2){
        document.getElementsByTagName("h1")[0].innerText = "player 1 Wins !";
        document.querySelector("h1").style.setProperty('--show1','inline-block');
        document.querySelector("h1").style.setProperty('--show2','none');
     
    }   
    else{
        document.getElementsByTagName("h1")[0].innerText = "player 2 Wins !";
        document.querySelector("h1").style.setProperty('--show2','inline-block');
        document.querySelector("h1").style.setProperty('--show1','none');


    }
}

refresh();

// window.onload = (event) => {
//     var x =sessionStorage.getItem("reloading");
//     if(x){
//         sessionStorage.removeItem("reloading");
//         refresh();
//     }
// }

