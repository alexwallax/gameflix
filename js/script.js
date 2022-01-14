/*direciona click no botão assistir para youtube*/ 
document.getElementById("link").onclick = function() {

    /*location.href = "https://www.youtube.com/watch?v=YDhk1Ef8W9o";*/ //aqui abre na mesma janela

    window.open('https://www.youtube.com/watch?v=YDhk1Ef8W9o'); // aqui abre em outra janela
}

/*direciona click no botão mais informações para uma nova janela info.html*/ 
document.getElementById("info").onclick = function() {

    window.open('info.html'); 
}
