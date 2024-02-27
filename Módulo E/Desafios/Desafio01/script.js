function contar(){
    let inicio = document.getElementById('txti')
    let final = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.querySelector('div.res')
    if(inicio.value.length == 0 || final.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] Faltam dados!')
    }else{
        res.innerHTML = 'Contando...'
        let ini = Number(inicio.value)
        let fi = Number(final.value)
        let pa = Number(passo.value)
        
        if (ini > fi) {
            for(let c=1; c <= f; c += pa) {
                //Contagem crescente
                res.innerHTML += ` ${c} -->`
            }
        }
       
       
    }
}
