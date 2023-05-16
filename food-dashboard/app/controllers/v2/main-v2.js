// fetch date từ server và render

import { Food } from "../../models/v1/model.js";
import { layThongtinTuForm } from "../v1/controller-v1.js";
import { renderFoodList } from "./controller-v2.js";

const BASE_URL = "https://64561d8f2e41ccf169140b2a.mockapi.io/Food";
let fetchFoodList = () => {
  axios({
    url: BASE_URL,
    method: "GET",
  })
    .then((res) => {
      console.log("res: ", res);
      let foodArr = res.data.map((item) => {
        // khúc này rối nè
        // destructuring
        let { name, type, discount, img, desc, price, status, id } = item;
        // new object
        let food = new Food(id, name, type, price, discount, status, img, desc);
        return food;
      });
      renderFoodList(foodArr);
    })
    .catch((err) => {
      console.log("err: ", err);
    });
};
let xoaMonAn = (id) => {
  axios({
    url: `${BASE_URL}/${id}`,
    method: "DELETE",
  })
    .then((res) => {
      fetchFoodList();
      console.log("res: ", res);
    })
    .catch((err) => {
      console.log("err: ", err);
    });
};

window.xoaMonAn = xoaMonAn;
window.themMon = () => {
  console.log('themMon: ', themMon);

  let data = layThongtinTuForm();
  console.log("data: ", data);
  let newFood = {
    name: data.tenMon,
    type: data.loai,
    discount: data.khuyenMai,
    img:data.hinhMon,
    desc: data.moTa,
    price: data.giaMon,
    status: data.tinhTrang,
  };
  axios({
    url: BASE_URL,
    method: "POST",
    data: newFood,
  })
    .then((res) => {
        $('#exampleModal').modal('hide')
        fetchFoodList();
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
window.suaMonAn=(id)=>{
  
    // lấy chi tiết 1 món ăn từ id
    axios({
        url: `${BASE_URL}/${id}`,
        method: "PU",
      })
        .then((res) => {
    $('#exampleModal').modal('show')
    // show data lên form
    let {id, type,price,img,status,desc,discount,name}=res.data;
    document.getElementById("foodID").value=id; 
    document.getElementById("tenMon").value=name;
    document.getElementById("loai").value=type?"loai1":"loai2";
    document.getElementById("giaMon").value=price;
    document.getElementById("khuyenMai").value=discount;
    document.getElementById("tinhTrang").value=status?"1":"0";
    document.getElementById("hinhMon").value=img;
    document.getElementById("moTa").value=desc;

          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    


fetchFoodList();
