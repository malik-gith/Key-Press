let main = document.querySelector('.main');
document.onkeydown = function (e) {
       main.innerHTML = `<p>The Key Pressed is</p><span class="name">${e.key}</span><p class="code">Key Code : ${e.keyCode}</p>`;
};
