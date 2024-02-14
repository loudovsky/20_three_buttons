const myBody = document.querySelector('body')

myBody.addEventListener('click', function(e) {
  if(e.target.classList.contains('button')) {
    if (e.target.classList.contains('red')){
      e.target.classList.remove('red')
    }
    else {
      if (myBody.querySelector('.red')){
        myBody.querySelector('.red').classList.remove('red')
        e.target.classList.add('red')
      }
      else {
        e.target.classList.add('red')
      }
    }
  }
})

