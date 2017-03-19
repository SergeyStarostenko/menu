/**
 * Created by serge on 18.03.2017.
 */


/* Событие на нажатие span id="btn-menu" */
$('#btn-menu').on('click', function () {

    var countListLi = ($('#menu li').length), // Счетчик кол-ва пунктов
        i = 0;

    if( $("#menu li").css("display") == "none" ){
        showMenu(); // Если скрыты, запускаем функ. открыть меню - showMenu()
    }
    else {
        hideMenu(); // Если открыты, запускаем функ. закрыть меню - hideMenu()
    }


    /* Фун. открыть меню */
    function showMenu() {

        //console.log('Открываю пункт -> ' + i);

        if(i < countListLi){

            //console.log('Прошли проверку ' + i + ' < ' + countListLi);

            $("#menu li:eq(" + i + ")").animate({
                    opacity: "show"
            },
                100,
                function(){
                    //console.log('Открыл пункт -> ' + i);
                    i++;
                    showMenu();
                }
            )

        };

    };


    /* Фун. закрыть меню */
    function hideMenu() {
        
        countListLi--;

        //console.log('Закрываю пункт -> ' + countListLi);

        if(countListLi >= 0){

            //console.log('Прошли проверку ' + countListLi + ' >= 0');

            $("#menu li:eq(" + countListLi + ")").animate({
                opacity: "hide"
            },
                50,
                function(){
                    //console.log('Закрыл пункт -> ' + countListLi);
                    hideMenu();
                }
            );

        };

    };

});
