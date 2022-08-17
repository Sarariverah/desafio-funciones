key_color = '';

const onClick = function () {
    key_color = this.id
}

document.getElementById('box-1').onclick = onClick;
document.getElementById('box-2').onclick = onClick;
document.getElementById('box-3').onclick = onClick;
document.getElementById('box-4').onclick = onClick;

document.addEventListener('keydown', function (event) {
     if (key_color != '') {
         if (event.key === 'a') {
             document.getElementById(key_color).style.backgroundColor = "yellow";
         } else if (event.key === 's') {
             document.getElementById(key_color).style.backgroundColor = "red";
         } else if (event.key === 'd') {
             document.getElementById(key_color).style.backgroundColor = "green";
         }
     }

});