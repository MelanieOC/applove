var pictures=document.getElementById('pictures');

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
  var div=document.createElement('div');
  var content=document.createElement('div');
  var img=document.createElement('img');
  var close=document.createElement('button');
  var next=document.createElement('button');
  var before=document.createElement('button');
  close.onclick=function() {
    padre.removeChild(padre.lastChild);
  }

  next.onclick=function() {
    padre.removeChild(padre.lastChild);
    e=padre.nextSibling.firstChild;
    creaModal(e);
  }
  before.onclick=function() {
    padre.removeChild(padre.lastChild);
    e=padre.previousSibling.firstChild;
    creaModal(e);
  }
  img.src=e.src;
  close.innerHTML='X';
  next.innerHTML='>';
  before.innerHTML='<';
  div.setAttribute("class",'modal');
  content.setAttribute("class",'content');
  close.setAttribute("class",'close');
  next.setAttribute("class",'next');
  before.setAttribute("class",'before');

  content.appendChild(img);
  content.appendChild(close);
  if(padre.nextSibling){
    content.appendChild(next);
  }
  if(padre.previousSibling){
    content.appendChild(before);
  }
  div.appendChild(content);
  padre.appendChild(div);
}
