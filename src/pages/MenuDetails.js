import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMenuDetail } from "../apis/MenuAPI";

function MenuDetails() {
    const {menuCode} = useParams();

    const [menu, setMenu] = useState({

        menuName: '',
        menuPrice: 0,
        categoryName: '',
        detail:{}
    });
   useEffect(
    () => {
        setMenu(getMenuDetail(menuCode));
    },
    []
   );
   console.log('메뉴?',menu);


    return (
        <>
        <h2>메뉴 상세 설명</h2>
        <h3>메뉴 이름 : {menu.menuName}</h3>
        <h3>메뉴 가격 : {menu.menuPrice}</h3>
        <h3>메뉴 종류 : {menu.categoryNamee}</h3>
        <h3>메뉴 이름 : {menu.detail.description}</h3>
        </>
    );
}

export default MenuDetails;