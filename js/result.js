debugger;
var score = localStorage['result'];
localStorage.removeItem( 'result' ); 
var finalscore=document.querySelector("#score");
finalscore.textContent=score;