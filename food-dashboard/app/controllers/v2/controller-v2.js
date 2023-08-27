const BASE_URL = "https://64e12f9e50713530432d0275.mockapi.io/food";

let renderFoodList = (list) => {
    let contentHTML = "";
    list.forEach((food) => {
        let {ma, ten, loai, gia, khuyenMai, giaKM, tinhTrang} = food;
        // extension" es6-string-html
        let trString = /*html*/ `
        <tr>
            <td>${ma}</td>
            <td>${ten}</td>
            <td>${loai}</td>
            <td>${gia}</td>
            <td>${khuyenMai}</td>
            <td>0</td></td>
            <td>${tinhTrang}</td>
        </tr>
        `;
        contentHTML += trString;
    });
    document.getElementById("tbodyFood").innerHTML = contentHTML;
}

// gì liên quan đến API hay đặt tên FETCH
export let fetchFoodList = () => {
   axios ({
    url: BASE_URL,
    method: "GET",
   })
    .then((res) => {
        renderFoodList(res.data);
        console.log(res);       
    })
    .catch((err) => {
        console.error(err);
    });    
};

