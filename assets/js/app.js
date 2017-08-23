window.addEventListener('load', function(){
  var container=document.getElementById('container');
  var docFragment=document.createDocumentFragment();


  figures.allFigures.forEach(function(e,id){
    var divBox=document.createElement('div');
    var figure=document.createElement('figure');
    var image=document.createElement('img');
    var caption=document.createElement('figcaption');
    var h5Name=document.createElement('h5');

    divBox.setAttribute("class",'box-work');
    figure.setAttribute("class","figure");
    image.setAttribute("alt",e.alt);
    image.src="assets/img/img-"+(id+1)+".jpg";
    caption.setAttribute("class",'name-coder');
    h5Name.setAttribute("class",'mb-0');

    figure.appendChild(image);
    h5Name.appendChild(document.createTextNode(e.project));
    caption.appendChild(h5Name);
    figure.appendChild(caption);
    divBox.appendChild(figure);
    docFragment.appendChild(divBox);
    container.appendChild(docFragment);

    //eventos onclick
    image.onclick=function(e){
      //crea modal invocando a funcion
      divBox.appendChild(creaModal(image.src));

      var modal=document.getElementById('modal');
      var closeModal=document.getElementById('close-modal');

      modal.classList.add("open");

      closeModal.onclick=function(){
        modal.classList.remove("open"); //quita display:block
        divBox.removeChild(modal); //quita del dom todo el modal
      }
    };
  });
});

function creaModal(src){
  var divModal=document.createElement('div');
  var modalContent=document.createElement('div');
  var img=document.createElement('img');
  var closeModal=document.createElement('span');

  divModal.setAttribute("id",'modal');
  divModal.setAttribute("class",'modal');
  modalContent.setAttribute("class",'modal-content');
  img.src=src;
  closeModal.setAttribute("id",'close-modal');
  closeModal.appendChild(document.createTextNode("X"));

  modalContent.appendChild(img);
  modalContent.appendChild(closeModal);
  divModal.appendChild(modalContent);
  return divModal;
}
