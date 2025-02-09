function a() {
    c()
    function c() {
        console.log(a)
    }
}

var a = 1;
a();
