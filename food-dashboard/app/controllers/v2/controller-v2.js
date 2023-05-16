// map

// forEach

export let renderFoodList = (foodArr) => {
  let contentHTML = "";
  console.log('foodArr: ', foodArr);

  foodArr.forEach((item) => {
    let { maMon, tenMon, loai,giaMon, khuyenMai, tinhTrang } = item;
    let contentTr = `<tr>
        <td>${maMon} </td>
        <td>${tenMon} </td>
        <td>${loai ?"chay":"mặn"} </td>
        <td>${giaMon} </td>
        <td>${khuyenMai} </td>
        <td>${item.tinhGiaKM()} </td>
        <td>${tinhTrang?"Còn":"Hết"}</td>
        <td>

        <button onclick="xoaMonAn(${maMon})" class="btn btn-danger">Delete</button>
        <button onclick="suaMonAn(${maMon})" class="btn btn-success">Edit</button>
        </td>
        

        
        
        </tr>`;
        contentHTML+=contentTr
    
  });
  document.getElementById("tbodyFood").innerHTML=contentHTML;
};
let colors = ["red", "blue"];
colors.forEach = (item, index) => {
  console.log("here", item, index);
};
