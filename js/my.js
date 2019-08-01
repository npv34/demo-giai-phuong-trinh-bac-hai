function calculator() {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let c = parseInt(document.getElementById("c").value);

    if (a == 0) {
        alert("Khong phai phuong trinh bac 2");
    } else {
        let denta = b * b - 4 * a *c;
        if (denta < 0) {
            alert("Phuong trinh vo nghiem")
        } else {
            let x1 = (-b + Math.sqrt(denta)) / (2 * a);
            let x2 = (-b - Math.sqrt(denta)) / (2 * a);
            document.getElementById("result").innerHTML = "Nghiem x1= " + x1 + " Nghiem x2= " + x2;
        }
    }
}




