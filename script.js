const avanca = document.querySelectorAll('.btn-proximo');
const reiniciarBtn = document.getElementById('btn-reiniciar')

avanca.forEach(button =>{
  button.addEventListener('click',function() {
    const atual = document.querySelector('.ativo');
    const proximoPasso = 'passo-'+this.getAttribute('data-proximo');
    
    atual.classList.remove('ativo');
    const proximoelemento = document.getElementById(proximoPasso);

    if (proximoElemento){
        proxmoelementp.classList.add('arivo');
    } else {
        console.error(`Elemento com ID "${proximoPasso}" não encontrado.`)
    }
  })
});


// Reinicia o jogo ao clicar no botão de reinício
if (reiniciarBtn) {
    reiniciarBtn.addEventListener('click', () => {
       const atual = document.querySelector('.ativo');
       atual.classList.remove('ativo');
       document.getElementById('paso-0').classList.add('ativo');
    });
}
