import React,{useState} from "react";
import Menu from "./menuapi";
import Menucard from "./Menucard";
import Navbar from "./Navbar";

const uniqueList = [...new Set(Menu.map((crnEle)=>{
  return crnEle.category ;
  
})),'All']

console.log(uniqueList);

const Restaurant = () => {
    const [menuData, setMenuData] = useState(Menu)

    const filter=(category)=>{

      if(category==='All'){
       return setMenuData(Menu);
      }

     const updatedMenu = Menu.filter((crnele)=>{
        return crnele.category===category
        })
        setMenuData(updatedMenu)
    }
  return (
      <>
        <Navbar uniqueList={uniqueList} filter={filter} />

    <Menucard menuData={menuData}/>
    </>
  );
};

export default Restaurant;
