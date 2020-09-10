var novoPiu = document.querySelector("#newPost");
var piupiuButton = novoPiu.querySelector("#piupiu");

piupiuButton.addEventListener("click", function(event){
    event.preventDefault();
    var textoPiu = novoPiu.newPostTextarea.value;
    var oldPosts = document.querySelector("#oldPosts");
    var oldPost = document.createElement("div");
    var divNameTime = document.createElement("div");
    var divName = document.createElement("div");
    var subdivName = document.createElement("div");
    var divText = document.createElement("div");
    var divInteract = document.createElement("div");

    oldPost.appendChild(divNameTime);
    divNameTime.appendChild(divName);
    oldPost.appendChild(divText);
    oldPost.appendChild(divInteract);
    oldPosts.appendChild(oldPost);

    oldPost.classList.add("container-column");
    oldPost.classList.add("post");
    oldPost.classList.add("oldPost");
    divNameTime.classList.add("container-row");
    divNameTime.classList.add("withinPost");
    divNameTime.classList.add("divNameTime");
    divName.classList.add("container-row");
    divName.classList.add("divName");
    subdivName.classList.add("container-column");
    subdivName.classList.add("subdivName");
    divText.classList.add("container-row");
    divText.classList.add("withinPost");
    divInteract.classList.add("container-row");
    divInteract.classList.add("withinPost");
    divInteract.classList.add("interact");

    //foto e nome
    var pictureLink = document.createElement("a");
    var picture = document.createElement("img");
    picture.src = "img/foto_de_perfil.png";
    pictureLink.appendChild(picture);
    divName.appendChild(pictureLink);
    var name = document.createElement("p");
    var username = document.createElement("small");
    subdivName.appendChild(name);
    subdivName.appendChild(username);
    divName.appendChild(subdivName);
    name.textContent = "Julia";
    name.classList.add("name");
    username.textContent = "@julia_frejat";

    //tempo
    /*
    var dataHora = new Date();
    var tempo = document.createElement("small");
    divNameTime.appendChild(tempo);
    function doisDigitos(i){
        if (i < 10){
            i = "0" + i;
        }
        return i
    }
    tempo.textContent = doisDigitos(dataHora.getHours()) + ":" + doisDigitos(dataHora.getMinutes())
    */

    //conteúdo
    var text = document.createElement("p");
    text.classList.add("text");
    divText.appendChild(text);
    text.textContent = textoPiu

    //interação
    var destaque = document.createElement("a");
    var imgDestaque = document.createElement("img");
    imgDestaque.src = "img/post_destaque.svg";
    destaque.appendChild(imgDestaque);
    destaque.classList.add("interaction");

    var like = document.createElement("a");
    var imgLike = document.createElement("img");
    imgLike.src = "img/post_like.svg";
    like.appendChild(imgLike);
    var likeNumber = document.createElement("small");
    likeNumber.id = "likeNumber";
    like.appendChild(likeNumber);
    like.classList.add("interaction");

    var editar = document.createElement("a");
    var imgEditar = document.createElement("img");
    imgEditar.src = "img/post_editar.svg";
    editar.appendChild(imgEditar);
    editar.classList.add("interaction");

    var deletar = document.createElement("a");
    var imgDeletar = document.createElement("img");
    imgDeletar.src = "img/post_deletar.svg";
    deletar.appendChild(imgDeletar);
    deletar.classList.add("interaction");

    divInteract.appendChild(destaque);
    divInteract.appendChild(like);
    divInteract.appendChild(editar);
    divInteract.appendChild(deletar);

    //limpa campo de texto de novo piu
    novoPiu.reset();
})