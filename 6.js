a = [1,5,65,12,1,4,5];
//a = [1,1,1,1,1,1,1,1];

i = 1;
check = true;

a.forEach(element => {
    if(element != a[1]){check = false;}
});

if (check == true){
    alert('Все элементы одинаковые');
}else{
    alert('Элементы разные');
}