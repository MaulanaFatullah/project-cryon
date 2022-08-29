const navButton = document.querySelector('.nav-btn');
const navMobile = document.querySelector('.nav-mobile');

const profileModal = document.querySelector('#modal-profile');
const openProfileModal = document.querySelector('.btn-profile-box');
const closeProfileModal = document.querySelector('.btn-close-profile');

const openImage = document.querySelector('.btn-img-modal');
const closeImageModal = document.querySelector('.btn-close-img');

// ---------------------------------------------------------------

let coll = document.getElementById('snapshot-collection');
let collectionPage = document.getElementById('collection-page');
let totalImg = 22;

for (let modalNumber = 2; modalNumber <= totalImg; modalNumber++) {
   
   const dialogImg = document.getElementById('img-modal-1');
   const dialogImgSrc = dialogImg.cloneNode(true);
   
   document.getElementById('collection-page').appendChild(dialogImgSrc);
   document.getElementById('img-dialog-src-1').id = 'img-dialog-src-' + modalNumber;
   document.getElementById('img-dialog-src-1').src = 'assets/images/pic-' + modalNumber + '.jpeg' ;
   
   document.getElementById('img-modal-1').id = 'img-modal-' + modalNumber;

   let imageModal = document.querySelector('#img-modal-' + modalNumber);
   
   
   imageModal.showModal();


   imageModal.close();
   
}

for (let index = 2; index <= totalImg; index++) {
   const articleLoop = coll.cloneNode(true);
   
   collectionPage.appendChild(articleLoop);
   document.getElementById('img-src').src = 'assets/images/pic-' + index + '.jpeg' ;  
   
}


navButton.addEventListener('click', function() {
   navButton.classList.toggle('active');
   navMobile.classList.toggle('active');
});

openProfileModal.addEventListener('click', function() {
   profileModal.showModal();
});
document.querySelector('.btn-close-profile').onclick = function() {
    profileModal.classList.add('hide');
    profileModal.addEventListener('webkitAnimationEnd', function(){
        profileModal.classList.remove('hide');
        profileModal.close();
        profileModal.removeEventListener('webkitAnimationEnd',  arguments.callee, false);
    }, false);
};

document.onkeydown = function(e) {
   if(event.keyCode == 123) {
      return false;
   }
   if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
      return false;
   }
   if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
      return false;
   }
   if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
      return false;
   }
   if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
      return false;
   }
}
