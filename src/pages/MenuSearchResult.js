import { useSearchParams } from 'react-router-dom';
import {useEffect, useState} from 'react';
import { searchMenu } from '../apis/MenuAPI';
import MenuItem from '../components/MenuItem';
import boxStyle from './Menu.module.css';


function MenuSearchResult () {

    const [menuList, setMenuList] = useState([]);
    const [searchParams] = useSearchParams();

    const menuName = searchParams.get('menuName');

    useEffect(

        () => {
             setMenuList(searchMenu(menuName));

        },
        [menuName]
    )



    return (
        <div>
            <h1>검색된 메뉴</h1>
            <div className={boxStyle.MenuBox}>
                {menuList.map(menu => <MenuItem key={menu.menuCode} menu={menu}/>)}
            </div>
        </div>
    );
}

export default MenuSearchResult;