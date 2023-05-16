export let username = 'alice'
export let age=5;

// export default function sayHello(){
//     console.log("hello");
// }

// 2 loại: export và export default
// export: sử dụng được nhiều lần trong 1 file ~ trùng tên và {}
// export default:sử dụng 1 lần duy nhất trong 1 file ~ khác tên vẫn sử dụng được và ko có {}

export function layThongtinTuForm(){
    let maMon=document.getElementById("foodID").value;
    let tenMon=document.getElementById("tenMon").value;
    let loai=document.getElementById("loai").value;
    let giaMon=document.getElementById("giaMon").value;
    let khuyenMai=document.getElementById("khuyenMai").value;
    let tinhTrang=document.getElementById("tinhTrang").value;
    let hinhMon=document.getElementById("hinhMon").value;
    let moTa=document.getElementById("moTa").value;
   
    return{
      maMon,
        tenMon,
        loai,
        giaMon,
        khuyenMai,
        tinhTrang,
        hinhMon,
        moTa,
    };
}
export default function showThongTinLenForm(food){
     document.getElementById("imgMonAn").src=food.hinhMon
     document.getElementById("spMa").innerText=food.maMon
     document.getElementById("spTenMon").innerText=food.tenMon
     document.getElementById("spLoaiMon").innerText=food.loai=="loai1"?"Chay":"Mặn";
     document.getElementById("spGia").innerText=food.giaMon
     document.getElementById("spKM").innerText=food.khuyenMai
     document.getElementById("spGiaKM").innerText=food.tinhTrang
     document.getElementById("pMoTa").innerText=food.moTa

}