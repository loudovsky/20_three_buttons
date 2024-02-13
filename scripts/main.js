let myButton = document.querySelectorAll('button')
let myBody = document.querySelector('body')

/*myButton.forEach(element => {
    console.log(myButton);
    element.addEventListener('click',function() {
        element.classList.toggle("red")
        element.nextSibling.classList.remove("red")
        element[2].setAttribute("class","")
    })
    /*element[1].addEventListener('click',function() {
        element[1].classList.toggle("red")
        element[0].setAttribute("class","")
        element[2].setAttribute("class","")
    })
    element[2].addEventListener('click',function() {
        element[2].classList.toggle("red")
        element[0].setAttribute("class","")
        element[1].setAttribute("class","")
    })
});*/

myBody.addEventListener('click', function(e) {
    if (e.target.classList.contains("button")) {
      e.target.classList.toggle('red')
    }
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
      if (button !== e.target && button.classList.contains('red')) {
        // Retirez la classe 'red' des autres boutons
        button.classList.remove('red');
      }
    })
})