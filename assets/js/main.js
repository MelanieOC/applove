var pictures=document.getElementById('pictures');
var grande=document.createElement('grande');
for (var i = 1; i < 10; i++) {
  var div=document.createElement('div');
  div.classList.add('box');
  var img= document.createElement('img');
  img.src='assets/img/img-'+i+'.jpg';
  var p=document.createElement('p');
  p.innerHTML='Nombre del proyecto';
  p.classList.add('text-uppercase');

  div.appendChild(img);
  div.appendChild(p);

  img.onclick=function() {
    creaModal(this);
  }
  pictures.appendChild(div);
}

function creaModal(e){
  var padre=e.parentNode;
  var hermano=padre.nextSibling;
  var div=document.createElement('div');
  var content=document.createElement('div');
  var img=document.createElement('img');
  var close=document.createElement('button');
  var next=document.createElement('button');
  close.onclick=function() {
    padre.removeChild(padre.lastChild);
  }

  next.onclick=function() {
    padre.removeChild(padre.lastChild);
    e=hermano.firstChild;
    creaModal(e);
  }
  img.src=e.src;
  close.innerHTML='X';
  next.innerHTML='>';
  div.setAttribute("class",'modal');
  content.setAttribute("class",'content');
  close.setAttribute("class",'close');
  next.setAttribute("class",'next');

  content.appendChild(img);
  content.appendChild(close);
  content.appendChild(next);
  div.appendChild(content);
  padre.appendChild(div);
}
