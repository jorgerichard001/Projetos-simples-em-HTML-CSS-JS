function colorChange(c){
    var a = getComputedStyle(c);
    var b = a.backgroundColor;
    document.getElementsByTagName("body")[0].style.backgroundColor=b;
}