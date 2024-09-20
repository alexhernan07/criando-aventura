const avanca = document.querySelectorAll('.btn-proximo')

avanca.forEach(button => {
    button.addEventListener('click',function(){
        const atual = document.querySelectorAll('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute(data proximo)
    
        atual.classList.remove('ativo');
        Document.getElementById(proximoPasso).classList.add('ativo')              
    })
})