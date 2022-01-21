function conferir() {
   var opcao = document.getElementsByName('tipo') 
   var foto = document.getElementById('foto')
   var img = document.getElementById('img')
   var p = document.getElementById('para')
   var header = document.getElementById('header')
   var tipo =''
   if(opcao[0].checked){
       tipo = 'hotel'
       foto.src = 'imagens/hotel.jpg' 
       document.body.style.background = '#C4A576' 
       header.style.background = '#162837'
   }else if (opcao[1].checked){
       tipo = 'Motohome'
       foto.src = 'imagens/motohome.jpg'
       document.body.style.background = '#FEDD93' 
       header.style.background = '#DF8139'
       
   }else {
       tipo = 'veleiro'
       foto.src = 'imagens/veleiro.jpg'
       document.body.style.background = '#71BFEA' 
       header.style.background = '#004EB3'
       
   }

}
