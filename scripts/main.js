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
      let nextButton = e.target.nextElementSibling;
        if (nextButton.classList.contains('red')) {
            nextButton.classList.remove('red');
        }
       let previousButton = e.target.previousElementSibling;
       if (previousButton.classList.contains('red')) {
        previousButton.classList.remove('red');
    }
    }
  });

git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/loudovsky/20_three_buttons.git
git push -u origin main
