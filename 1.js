c = prompt();
c = +c;


if (typeof(c) == "number"){
    if (c == NaN){
        alert('Это NaN');
    }
    else{
        if(c % 2 == 0){
            alert('Четное');
        }
        else{
            alert('Нечетное');
        }
    }
}
else {alert('Упс, кажется, вы ошиблись');}


