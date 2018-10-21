window.onload = function(){
   var words = [
   ['дом','кот','сон','нос'] ,
   ['слон','пюре','рука','нога'] ,
   ['колпак','карта','фонарь','кошка']
   ];

  var popitki = 5;

  var win = 0;

   var wor = [];

   var buttons = document.querySelectorAll('button');
   buttons[0].onclick = function(){
   	 gamewindow2.style.left = '0px';
   }
  

   document.getElementById('words').onclick = function(event){
   	var a = 0 - 0.5 + Math.random() * (words[0].length - 0 + 1);
    a = Math.round(a);
   	 gamewindow3.style.left = '-2px';
   	 if(event.target.innerHTML == 3){
   	 	   for (var i = 0; i < words[0][a].length; i++) {
            wor.push(words[0][a].charAt(i));
            if(i == words[0][a].length - 1){
            console.log(wor);
            }
         }
   	 }
   }
   document.getElementById('vvod').onkeypress = function(event){
   	if(event.key != wor[event.target.getAttribute('data-name')]){
   		kk.innerHTML = Number(kk.innerHTML) - 1;   		
   		popitki--;
   		if(popitki == 0){
   			alert('You Lose');
   			location.reload();
   		}
   	}
   	else{

   		event.target.setAttribute('readonly', true);
   		event.target.value = event.key;
   		win++;
   		console.log(win)
   		if(win == 3){
   			alert('You win');
   			location.reload();
   			
   		}
   	}
   }
}
