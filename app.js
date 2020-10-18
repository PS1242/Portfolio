for (let i = 0 ; i < document.getElementsByClassName("anim").length ; i++){

    addClass(i);


}

function addClass(i){

    setTimeout(function () {

        var element = document.getElementsByClassName("anim")[i];
        element.classList.add('bounce-2');

    } , 200 * i);



}


