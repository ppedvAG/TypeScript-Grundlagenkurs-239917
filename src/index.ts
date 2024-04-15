console.log('Hello World')

function init() {
    const div = document.createElement('div');
    div.innerHTML = "Hello World";
    const body = document.getElementsByTagName('body')[0];
    body.appendChild(div);
}

try {
    init();
} catch (error) {
    console.error(error);
}