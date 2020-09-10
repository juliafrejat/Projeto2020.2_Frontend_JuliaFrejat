var oldPosts = document.querySelector("#oldPosts");
var friendList = [];

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://next.json-generator.com/api/json/get/EkyZfHLU_");
xhr.addEventListener("load", function(){
    var response = JSON.parse(this.response);
    response.forEach(function(object){
        //conteúdo do post
        var nome = document.createElement("p");
        var username = document.createElement("small");
        var mensagem = document.createElement("p");
        var imagemLink = document.createElement("a");
        var imagem = document.createElement("img");
        imagemLink.appendChild(imagem);

        nome.textContent = object.nome;
        username.textContent = object.username;
        mensagem.textContent = object.mensagem;
        imagem.src = object.imagem;

        nome.classList.add("name");
        mensagem.classList.add("text");
        imagemLink.classList.add("notCircImg");

        //adiciona à lista de amigos
        var friend = [object.nome, object.username, object.imagem]
        friendList.push(friend);

        //estrutura do post
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

        //adiciona conteúdo à estrutura
        divName.appendChild(imagemLink);
        subdivName.appendChild(nome);
        subdivName.appendChild(username);
        divName.appendChild(subdivName);
        divText.appendChild(mensagem);

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
    })
})
xhr.send();

//pesquisa por amigos
var searchForm = document.querySelector("#search");
var searchInput = searchForm.querySelector("input");
var list = document.createElement("div");
var posts = document.querySelector("#posts");
list.classList.add("container-column");
console.log(friendList);
friendList.forEach(function(){
    console.log("öi");
    var divFriend = document.createElement("div");
    var divName = document.createElement("div");
    var nome = document.createElement("p");
    var username = document.createElement("small");
    var imagemLink = document.createElement("a");
    var imagem = document.createElement("img");

    list.appendChild(divFriend);
    imagemLink.appendChild(imagem);
    divFriend.appendChild(imagemLink);
    divFriend.appendChild(divName);
    divName.appendChild(nome);
    divName.appendChild(username);

    nome.textContent = friendList[0][0];
    username.textContent = friendList[0][1];
    imagem.src = friendList[0][2];

    nome.classList.add("name");
    imagemLink.classList.add("notCircImg");    
    divFriend.classList.add("container-row");
    divFriend.classList.add("divName");
    divName.classList.add("container-column");
    divName.classList.add("subdivName");
})

searchInput.addEventListener("input", function(){
    posts.innerHTML = "";
    posts.appendChild(list);
})