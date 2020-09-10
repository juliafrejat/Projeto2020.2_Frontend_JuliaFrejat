var piupiuButton = document.querySelector("#piupiu");
var likeCounter = 0; //contador de likes do usuário da página
var destaqueCounter = 0; //contador de destaques do usuário da página

piupiuButton.addEventListener("click", function(){
    var pius = document.querySelectorAll(".oldPost");
    var interactions = pius[pius.length - 1].querySelectorAll(".interaction");
    //destacar
    interactions[0].addEventListener("click", function(){
        destaqueCounter++;
        var img = interactions[0].querySelector("img");
        if(destaqueCounter%2 == 1){
            img.src = "img/post_destaque_colorido.svg";
            pius[pius.length - 1].classList.add("destaque");
        }
        else{
            img.src = "img/post_destaque.svg";
            pius[pius.length - 1].classList.remove("destaque");
        }
    })
    //like
    interactions[1].addEventListener("click", function(){
        likeCounter++;
        var likeNumber = pius[pius.length - 1].querySelector("#likeNumber");
        var number = Number(likeNumber.textContent);
        if (likeCounter % 2 == 1){
            likeNumber.textContent = number + 1;
        }
        else{
            likeNumber.textContent = ""
        }
        var img = interactions[1].querySelector("img");
        if(likeNumber.textContent > 0){
            img.src = "img/post_like_colorido.svg";
        }
        else{
            img.src = "img/post_like.svg";
        }
    })
    //editar
    interactions[2].addEventListener("click", function(){
    })
    //deletar
    interactions[3].addEventListener("click", function(){
        this.parentNode.parentNode.remove();
    })
})