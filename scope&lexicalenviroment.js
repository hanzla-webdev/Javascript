function a() {
    c()
    function c() {
        console.log(aa)
    }
}

var aa = 1;
a();
