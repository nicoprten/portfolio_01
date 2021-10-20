let toggler = document.getElementById('toggler');
let list = document.getElementById('list');

toggler.addEventListener('click', (e)=>{
    if(e.target.innerHTML === 'dehaze'){
        e.target.innerHTML = 'close';
        $('#list').slideDown(200);
    }else{
        e.target.innerHTML = 'dehaze';
        $('#list').slideUp(200);
    }
})

// DOWNLOAD CV

let button_cv = document.getElementById('download_cv');
let msj_cv = document.getElementById('msj_cv');

button_cv.addEventListener('click', (e)=>{
    e.target.style.color = 'white';
    msj_cv.innerHTML === '' ? msj_cv.innerHTML = `<p>Successful download!</p>` : $('#msj_cv').show().delay(2000).slideUp(200);
    $('#msj_cv').delay(2000).slideUp(200);
})