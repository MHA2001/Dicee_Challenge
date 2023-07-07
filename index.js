
function refresh(){
    player1 = Math.floor(Math.random()*6+1);
    player2 = Math.floor(Math.random()*6+1);
    document.querySelector(".img1").setAttribute("src" , "./images/dice"+player1+".png");
    document.querySelector(".img2").setAttribute("src" , "./images/dice"+player2+".png");
    if (player1 == player2){
        document.getElementsByTagName("h1")[0].innerText = "Draw !"

    }
    else if (player1>player2){
        document.getElementsByTagName("h1")[0].innerText = "player 1 Wins !"

    }
    else{
        document.getElementsByTagName("h1")[0].innerText = "player 2 Wins !"
    }
}
refresh();

