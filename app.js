

var btnOkay = document.getElementById('btnOkay');
btnOkay.onclick = () => {
    console.log('Hello');
    var divEmpty = document.getElementById('divEmpty');
    divEmpty.innerHTML = '<h1>' +new Date() +'</h1>';
};

function myClick() {
    console.log('hello');
}