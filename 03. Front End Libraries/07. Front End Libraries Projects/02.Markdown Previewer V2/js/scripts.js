const editor = document.getElementById('editor');
const preview = document.getElementById('preview');




function convertText() {
    console.log('convert');
    preview.innerHTML = editor.value;
}



window.addEventListener("input", function(e) {
    convertText();
}, false);