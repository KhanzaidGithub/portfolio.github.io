let spiner = document.getElementById('spiner');
let body = document.querySelector('body');
spiner.style.display = 'none';

window.addEventListener('load', function () {
    spiner.style.display = 'Block';
    setTimeout(() => {
        spiner.style.display = 'none';
        console.log('Loaded Finished');
    }, 2000);

});
