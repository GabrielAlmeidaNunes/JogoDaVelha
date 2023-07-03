const colunas= document.querySelectorAll('#velha');
const resultado=document.querySelector('#resultado');

let  jogador="X";
let vencedor = false;

colunas.forEach((elemento,)=>{

    const coluna=elemento;
    
        coluna.addEventListener('click',()=>{
            if(!vencedor){
                iniciaJogo(coluna);   
            }
            velha(colunas);
                          
        })   
  
})



function iniciaJogo(coluna){

    verficaColunaVazia(coluna);
    
}

function verficaColunaVazia(coluna){

    if(coluna.innerText===''){
       jogador = verficaJogadorEColocaSimboloColuna(coluna,jogador);
    }
}

function verficaJogadorEColocaSimboloColuna(coluna,jogador){

    if(jogador=='X'){
        coluna.innerText=jogador;
        coluna.classList.add('jogador1');
        verificaSeHaGanhador(colunas,jogador);
        return jogador='O';
       
    }else{
        coluna.innerText=jogador;
        coluna.classList.add('jogador2');
        verificaSeHaGanhador(colunas,jogador);
        return jogador='X';
    }
   
}

function verificaSeHaGanhador(colunas,jogador){
    
    if(colunas[0].innerText==jogador && colunas[1].innerText==jogador && colunas[2].innerText==jogador){
    
        estilizaColunas(colunas[0],colunas[1],colunas[2]);
        exibeMensagem(jogador);
      
        
    }else if(colunas[3].innerText==jogador && colunas[4].innerText==jogador && colunas[5].innerText==jogador){

        estilizaColunas(colunas[3],colunas[4],colunas[5]);
        exibeMensagem(jogador);
      
    }else if(colunas[6].innerText==jogador && colunas[7].innerText==jogador && colunas[8].innerText==jogador){
        
        estilizaColunas(colunas[6],colunas[7],colunas[8])
        exibeMensagem(jogador);
      

    }else if(colunas[0].innerText==jogador && colunas[3].innerText==jogador && colunas[6].innerText==jogador){
       
        estilizaColunas(colunas[0],colunas[3],colunas[6])
        exibeMensagem(jogador);
       

    }else if(colunas[1].innerText==jogador && colunas[4].innerText==jogador && colunas[7].innerText==jogador){
        
        estilizaColunas(colunas[1],colunas[4],colunas[7])
        exibeMensagem(jogador);
     
    }else if(colunas[2].innerText==jogador && colunas[5].innerText==jogador && colunas[8].innerText==jogador){
        
        estilizaColunas(colunas[2],colunas[5],colunas[8])
        exibeMensagem(jogador);
       

    }else if(colunas[0].innerText==jogador && colunas[4].innerText==jogador && colunas[8].innerText==jogador){
        
        estilizaColunas(colunas[0],colunas[4],colunas[8])
        exibeMensagem(jogador);   

    }else if(colunas[2].innerText==jogador && colunas[4].innerText==jogador && colunas[6].innerText==jogador){
        
        estilizaColunas(colunas[2],colunas[4],colunas[6])
        exibeMensagem(jogador);
        
    }
}

function estilizaColunas(coluna1,coluna2,coluna3){
        coluna1.classList.add('jogador_ganhador');
        coluna2.classList.add('jogador_ganhador');
        coluna3.classList.add('jogador_ganhador');
}

function exibeMensagem(jogador){
    resultado.innerHTML = `O jogador ${jogador} ganhou
    <button class='reiniciar' id='reiniciar'>Reiniciar</button>
    `; 

    const btnReiniciar=document.querySelector('#reiniciar');
    reiniciar(btnReiniciar);
    vencedor = true;
}

function reiniciar(botao){

    botao.addEventListener('click',(e)=>{
        if(e.target.id==='reiniciar'){
            window.location.reload();
        }
    })
}

function velha(coluna){
    if(coluna[0].innerText!==''&&coluna[1].innerText!==''&&coluna[2].innerText!==''&&coluna[3].innerText!==''&&coluna[4].innerText!==''&&coluna[5].innerText!==''&&coluna[6].innerText!==''&&coluna[7].innerText!==''&&coluna[8].innerText!==''&&vencedor!=true){
            resultado.innerHTML = `O jogo deu velha ninguem ganhou
            <button class='reiniciar' id='reiniciar'>Reiniciar</button>
        `; 

        const btnReiniciar=document.querySelector('#reiniciar');
        reiniciar(btnReiniciar);
        vencedor = true;
 }
}
