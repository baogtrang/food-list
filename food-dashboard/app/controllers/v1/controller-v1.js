// các function trung gian thì cho vào controller.js hết
export function layThongTinTuForm(){
    let ma = document.getElementById("foodID").value;
    let ten = document.getElementById("tenMon").value;
    let loai = document.getElementById("loai").value;
    let gia = document.getElementById("giaMon").value;
    let khuyenMai = document.getElementById("khuyenMai").value;
    let tinhTrang = document.getElementById("tinhTrang").value;
    let hinhMon = document.getElementById("hinhMon").value;
    let moTa = document.getElementById("moTa").value;
    return {
        ma, ten, loai, gia, khuyenMai, tinhTrang, hinhMon, moTa, 
        tinhGiaKM: function (){
            return this.gia * (1 - this.khuyenMai / 100);
        }
    };
};

export let showThongTinForm = (data) => {
    // dùng DESTRUCTURING cho cú pháp ngắn gọn
    // extracting multiple values from data stored in the object data
    let {ma, ten, loai, gia, khuyenMai, tinhTrang, hinhMon, moTa} = data;
    document.getElementById("imgMonAn").src = hinhMon;
    document.getElementById("spMa").innerHTML = ma;
    document.getElementById("spTenMon").innerHTML = ten;
    document.getElementById("spLoaiMon").innerHTML = loai;
    document.getElementById("spGia").innerHTML = gia;
    document.getElementById("spKM").innerHTML = khuyenMai;
    document.getElementById("spGiaKM").innerHTML = data.tinhGiaKM();
    document.getElementById("spTT").innerHTML = tinhTrang;
    document.getElementById("spMoTa").innerHTML = moTa;
};