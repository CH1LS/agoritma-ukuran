let ukuran = prompt ("masukan ukuran sepatu anda")
let teksukuran;

if(ukuran >=90  && ukuran <=100){
        teksukuran = confirm("ukuran besar")
        console.log(teksukuran);
}else if (ukuran >=80 && ukuran <=90){
    teksukuran= confirm("ukuran sedang")
    console.log(teksukuran);
}else if (ukuran >=60 && ukuran <=80)
    teksukuran= confirm("ukuran kecil")
    console.log(teksukuran);