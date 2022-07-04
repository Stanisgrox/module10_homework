a = [1,2,4,5,7,56,1,0,154,3,0,null,'a','string','zero',0,'0'];

var odds = 0;
var evens = 0;
var zeros = 0;

a.forEach(element => {
    if(typeof(element) == "number"){
        if(element == 0){zeros++}
        else{
            if(element % 2 == 0){evens++;}
            else{odds++;}
        }
    }
});

console.log('Четных: ', evens, ' Нечетных: ', odds,' Нулей: ',zeros)