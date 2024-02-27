function carregar(){
    var msg = window.document.querySelector('div.msg')
    var foto = document.querySelector('div.img')
    var data = new Date()
    var hora = data.getHours()
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        //BOM DIA
        img.setAttribute('src', 'manhã.png')
        document.body.style.background ='rgb(255, 251, 0)'
    } else if (hora >=13 && hora < 19){
        //Boa tarde
        img.setAttribute('src', 'tarde.png')
        document.body.style.background = 'coral'
    } else{
        //BOA NOITE
        img.setAttribute('src', 'noite.png')
        document.body.style.background = 'blue'
    }

}
