function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        msg = "Tenha um bom dia!"
        img.src = 'assets/fotomanha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        msg = "Aproveite sua Tarde"
        img.src = 'assets/fototarde.png'
        document.body.style.background = '#b9846f'
    } else {
        msg = "Boa noite!"
        img.src = 'assets/fotonoite.png'
        document.body.style.background = '#36013f'    
   }
}
