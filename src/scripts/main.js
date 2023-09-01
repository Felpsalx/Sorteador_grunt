document.addEventListener('DOMContentLoaded', function(){
    
    
    document.getElementById("form-sortear").addEventListener('submit', function(e){
        e.preventDefault();
        let numeromax = document.getElementById('numeromax').value;
        
        numeromax = parseInt(numeromax); //caso o valor venha como uma string ele é convertido para um valor inteiro

        let numerpAleatorio = Math.random() * numeromax;
        numerpAleatorio = Math.floor(numerpAleatorio + 1)
        //math.round se for ex: 1.5 arredonda para cima e se for 1.4 arredonda para baixo


        document.getElementById('resultado-valor').innerText = numerpAleatorio;
        document.querySelector('.resultado').style.display = 'block'
    })
})