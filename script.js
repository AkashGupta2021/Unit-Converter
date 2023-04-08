let feet=document.getElementById("feet");
let inch=document.getElementById("inch");

feet.addEventListener('input', function(){
    let f= this.value;
    // 1 feet= 12 inch
    let i= f * 12;
    if(!Number.isInteger(i)){
        i=i.toFixed(2);
    };
    inch.value=i;

});


inch.addEventListener('input', function(){
    let i= this.value;
    // 1 feet= 12 inch
    let f= i / 12;
    if(!Number.isInteger(f)){
        f=f.toFixed(2);
    };

    feet.value=f;

})