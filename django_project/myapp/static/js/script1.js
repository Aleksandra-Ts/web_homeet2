function perenosImeni(value) {
    let name = document.querySelector('#perenos_imeni'), col = value.split(' '), prov = /^[А-ЯЁ ]+$/i.test(col[0]) && /^[А-ЯЁ ]+$/i.test(col[1]);
    if (col.length == 2) {
        if (prov == true) {
            document.querySelector('#name_format').style.visibility = 'hidden';
            document.querySelector('#name').style.border = '0px solid red';
            name.textContent = value;
        }
        else {
            document.querySelector('#name_format').style.visibility = 'visible';
            document.querySelector('#name').style.border = '1px solid red';
        }
    }
    else {
        document.querySelector('#name_format').style.visibility = 'visible';
        document.querySelector('#name').style.border = '1px solid red';
    }


}
 
function perenosGender1(value) {
    if (document.querySelector('#m').checked) {
        let gender2 = document.querySelector('#gender');
        gender2.textContent = "Парень";
    }
}

function perenosGender2(value) {
    if (document.querySelector('#f').checked) {
        let gender2 = document.querySelector('#gender');
        gender2.textContent = "Девушка";
    }
}

function perenosDate(value) {
    let y = new Date(value);
    let x = new Date();
    let age = document.querySelector('#age');
    const years = (-1970) + new Date(( new Date(x) - new Date(y) )).getFullYear();
    console.log(years);
    if (years <= 100){
    if (years == 1) {
        age.textContent = years + " год";
    } else if (years == 2 || years == 3 || years == 4 || (years / 10) > 2) {
        age.textContent = years + " года";
    } else if ((years / 10) <= 2) {
        age.textContent = years + " лет";
    }
    }
}

function perenosTG(value) {
    let col = value.split(' '), prov = /^[_0-9A-Z]+$/i.test(col[0].slice(1));
    if (col.length == 1 && prov == true  && col[0][0] == '@') {
        document.querySelector('#tg_format').style.visibility = 'hidden';
        document.querySelector('#tg').style.border = '0px solid red';
        document.querySelector('#telegram').textContent = value;   
    }
    else {
        document.querySelector('#tg_format').style.visibility = 'visible';
        document.querySelector('#tg').style.border = '1px solid red';
    }
}
function perenosTel(value) {
    let col = value.split(' ');
    if (col.length == 1) {
        if (col[0][0] + col[0][1] == '+7' && col[0].slice(2).length == 10) {
            prov = /^[0-9 ]+$/i.test(col[0].slice(2)) 
            if (prov == true) {
                document.querySelector('#tel_format').style.visibility = 'hidden';
                document.querySelector('#tel').style.border = '0px solid red';
                document.querySelector('#number').textContent = value; 
            } else { 
                document.querySelector('#tel_format').style.visibility = 'visible';
                document.querySelector('#tel').style.border = '1px solid red'; 
            }
        }
        else if (col[0][0]  == '8' && col[0].slice(1).length == 10) {
            prov = /^[0-9 ]+$/i.test(col[0].slice(2)) 
            if (prov == true) {
                document.querySelector('#tel_format').style.visibility = 'hidden';
                document.querySelector('#tel').style.border = '0px solid red';
                document.querySelector('#number').textContent = value; 
            } else {
                document.querySelector('#tel_format').style.visibility = 'visible'; 
                document.querySelector('#tel').style.border = '1px solid red';
            }
        }
        else {
            document.querySelector('#tel_format').style.visibility = 'visible'; 
            document.querySelector('#tel').style.border = '1px solid red';
        }
    } 
    else  {
        document.querySelector('#tel_format').style.visibility = 'visible';  
        document.querySelector('#tel').style.border = '1px solid red';
    }
}
function perenosFoto(value) {
    let perenos = document.getElementById("fotochka"); 
    let file = document.querySelector("input[type=file]").files[0]; 
    let reader = new FileReader(); 
   
    reader.onloadend = function () { 
      perenos.src = reader.result; 
    }; 
   
    if (file) { 
      reader.readAsDataURL(file); 
    } else { 
      perenos.src = ""; 
    } 
}
let com = '';
function aboutMyself(value) {
    let comment = document.querySelector('#perenos_about');
    comment.textContent = value.slice(0, 39) + '...';
    com = value;
}

function contacts() {
    if (document.querySelector('#telegram').style.visibility == "hidden") {
        document.querySelector('#telegram').style.visibility = "visible";
        document.querySelector('#number').style.visibility = "visible";
    } else {
        document.querySelector('#telegram').style.visibility = "hidden";
        document.querySelector('#number').style.visibility = "hidden";
    }
}


function turn() {
    if (document.querySelector('#perenos_about').textContent.length == 42) {
        document.querySelector('#perenos_about').textContent = com;
    } else {
        document.querySelector('#perenos_about').textContent = com.slice(0, 39) + '...';
    }
}