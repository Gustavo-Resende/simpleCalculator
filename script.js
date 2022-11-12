function insert(num){
    let numero = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = numero + num;
}

function clearAll(){
    document.getElementById('result').innerHTML = '';
}

function back(){
    let result =  document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = result.substring(0, result.length -1);
}

function calculate(){
    let calculate = document.getElementById('result').innerHTML;
    if(calculate){
        document.getElementById('result').innerHTML = eval(calculate);
    }
}

function themeLight(){
    let buttonL = document.getElementById('themeLight');
    buttonL.setAttribute('hidden', '');

    let buttonD = document.getElementById('themeDark');
    buttonD.removeAttribute('hidden');

    let body = document.querySelector('body');
    body.style.backgroundColor = '#eee';

    let h1 = document.querySelector('h1');
    h1.style.color = 'rgb(26, 26, 26)';
}

function themeDark(){
    let buttonL = document.getElementById('themeLight');
    buttonL.removeAttribute('hidden');

    let buttonD = document.getElementById('themeDark');
    buttonD.setAttribute('hidden', '');

    let body = document.querySelector('body');
    body.style.backgroundColor = 'rgb(26, 26, 26)';

    let h1 = document.querySelector('h1');
    h1.style.color = '#eee';
    h1.style.fontWeight = '700';
}