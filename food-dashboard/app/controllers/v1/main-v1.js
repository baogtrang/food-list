// các function THÊM, XÓA, SỬA thì cho vào main.js
import { layThongTinTuForm, showThongTinForm } from "./controller-v1.js";

function themMon(){
    // layThongTinTuForm
    let data = layThongTinTuForm();
    // let food = {...data, tinhGiaKM: function (){
    //     return this.gia * (1 - this.khuyenMai);
    // },}
    showThongTinForm(data);
    
};

// this line makes themMon gloabally accessible
window.themMon = themMon;

// document.getElementById("btnThemMon").addEventListener("click", themMon, showThongTinForm)

// window.themMonAn = themMon;
// window chỉ xuất hiện khi browser chạy
// if(window){
//     // client
// } else {
//     // server (chạy bằng terminal)
// }

// // TRUTHY FALSY
// // all values boil down to True of False (only in JS)
// // there are 6 falsy values: false, 0, "", null, undefined, NAN
// if (-1){
//     console.log("chay");
// }

// let initialState = {
//     userInfo: null,
// };
// if (initialState.userInfo) {
//     console.log("Chay");
// }