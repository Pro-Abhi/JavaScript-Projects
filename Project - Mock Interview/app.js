let body = document.querySelector('BODY')
let showHideBtn = document.querySelector('.create-btn')
let popupBox = document.querySelector('.popup-box')
let closeBtn = document.querySelector('.close')

// event on create-task button
showHideBtn.addEventListener('click', showHide)

function showHide(){
  if(popupBox.style.display == 'block'){
    popupBox.style.display = 'none'
  }
  else{
    popupBox.style.display = 'block'
  }
}

// event on close mark
closeBtn.addEventListener('click', hide)

function hide(){
  if(popupBox.style.display == 'block'){
    popupBox.style.display = 'none'
  }
}