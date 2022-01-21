function carregar(){
var box1 = document.getElementsByClassName('box1');
var box2 = document.getElementById('box2');
var box2 = document.getElementById('box2');
var box2 = document.getElementById('box2');
var box2 = document.getElementById('box2');
var box2 = document.getElementById('box2');
var box3 = document.getElementById('box3');
var box4 = document.getElementById('box4');
var box5 = document.getElementById('box5');
var box6 = document.getElementById('box6');
var box7 = document.getElementById('box7');
var tipo = document.getElementsByName('tipo');
    if( tipo[0]. checked){   
    box2.src = 'imagens/editadas/carro.png'
    box3.src = 'imagens/editadas/carro-a.png'
    box4.src = 'imagens/editadas/carro-l.png'
    box5.src = 'imagens/editadas/carro-a.png'
    box6.src = 'imagens/editadas/carro-l.png'
    box7.src = 'imagens/editadas/carro.png'
   // var html = '<a href="'+src+'">';
   // html += '<img class=box22 src="'+src+'" />' 
   // html += '</a>' 
    } else if(tipo[1].checked) {
        box2.src = 'imagens/editadas/bike-b.png'
        box3.src = 'imagens/editadas/bike-r.png'
        box4.src = 'imagens/editadas/bike-p.png'
        box5.src = 'imagens/editadas/bike-b.png'
        box6.src = 'imagens/editadas/bike-r.png'
        box7.src = 'imagens/editadas/bike-p.png'
    } else{
        box2.src = 'imagens/editadas/veleiro.png'
        box3.src = 'imagens/editadas/veleiro-p.png'
        box4.src = 'imagens/editadas/veleiro-l.png'
        box5.src = 'imagens/editadas/veleiro.png'
        box6.src = 'imagens/editadas/veleiro-p.png'
        box7.src = 'imagens/editadas/veleiro-l.png'
    }

}
