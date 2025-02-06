// let par = document.getElementById('abc')
// console.log(par.innerHTML)
// console.log(par.textContent)
// par.textContent = "Mrjeta<b>abc</b>"
// par.innerHTML = "mirjeta <b>abc</b>"


// let par = document.getElementsByClassName('test')
// let butoni = document.querySelector('button')
// function handelButtonClick() {
//     butoni.innerHTML = "u klikuaa"
//     par[0].textContent = "ky [sfsege"
// }
// butoni.addEventListener('click', handelButtonClick)



let body = document.body
let vargumeNgjya = ["red", "blue","green","black","pink","yellow"]
function ndrooNgjyren() {
    let index = (Math.random() * 3 - 1) + 0
    index = Math.round(index)
    body.style.backgroundColor = vargumeNgjya[index]
} 
body.addEventListener('click',ndrooNgjyren)