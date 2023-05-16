// import  { username,age } from "./controller-v1.js";
// import sayGoodbye from "./controller-v1";

// console.log(username);
// console.log('age: ', age);
// sayGoodbye();
import { Food } from "../../models/v1/model.js";

import showThongTinLenForm, { layThongtinTuForm } from "./controller-v1.js";


function themMon() {
  let data = layThongtinTuForm();
  let { maMon, tenMon, loai, giaMon, khuyenMai, tinhTrang, hinhMon, moTa } =
    data;
  let food = new Food(
    maMon,
    tenMon,
    loai,
    giaMon,
    khuyenMai,
    tinhTrang,
    hinhMon,
    moTa
  );
  console.log('food: ', food);

showThongTinLenForm(food);  
}   



window.themMon = themMon;
