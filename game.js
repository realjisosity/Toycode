let price = document.getElementById('inputvalue')
let quan = document.getElementById('quan')
let resultbox = document.getElementById('resultvalue')
let boxtodo = document.getElementById('boxtodo')
let butt = document.getElementById('butt')
let i = 0;

butt:addEventListener('click',function(){
    var para = document.createElement('p')
    para.classList.add('paragraph-styling')
    para.innerText = price.value
    boxtodo.appendChild(para, " d");
    i=Number(i)+Number(price.value)
    resultbox.value = i+"บาท"
    price.value = " "
    boxtodo.removeChild(para);
});