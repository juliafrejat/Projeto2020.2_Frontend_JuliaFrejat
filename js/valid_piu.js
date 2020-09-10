var novoPiu = document.querySelector("#newPost");
var textoNovoPiu = novoPiu.querySelector("#newPostTextarea");
//escuta o input de texto
textoNovoPiu.addEventListener("input", function(){
    var texto = textoNovoPiu.value;
    //mostra o número de caracteres atuais
    caracteres = texto.length;
    var charCounter = novoPiu.querySelector("#charCounter")
    charCounter.textContent = caracteres + "/140";
    var piupiuButton = novoPiu.querySelector("#piupiu");
    var errorMsg = novoPiu.querySelector("#errorMsg");
    //verifica se há texto e se ele está dentro do limite de caracteres
    if(texto.length < 1){
        piupiuButton.disabled = true;
        errorMsg.textContent = "O piu não pode estar vazio."
    }
    else if(texto.length > 0 && texto.length <=140){
        charCounter.classList.remove("errorCounter");
        textoNovoPiu.classList.remove("errorText");
        piupiuButton.disabled = false;
        errorMsg.textContent = ""
    }
    else if(texto.length > 140){
        charCounter.classList.add("errorCounter");
        textoNovoPiu.classList.add("errorText");
        piupiuButton.disabled = true;
        errorMsg.textContent = "O piu não pode ter mais de 140 caracteres."
    }
})