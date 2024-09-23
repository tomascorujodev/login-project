import { useState, useEffect } from "react";
import AccessButton from "../Components/AccessButton";
import Input from "../Components/Input";
import ButtonCall from "../Components/ButtonCall";

//Menu de manera dinamica
let MENU_DATA = [];
if (localStorage.getItem("usrData")) {
  MENU_DATA = [
    {
      link: '/inicio',
      content: 'Inicio'
    },
    {
      link: '/noticias',
      content:'Noticias'
    }
  ]
}

const Frontend = (props) => {
  const [usrData, setUsrData] = useState(false);
  const logOut = () => {
    localStorage.clear();
    window.location.replace("/login");
  }
  useEffect(() => {
    let tmp = localStorage.getItem("usrData");

    if (tmp) {
      setUsrData(JSON.parse(tmp));
    }
  }, []);


  return (
    <>
      <header className="w-[100vw] h-[3rem] bg-indigo-500 flex items-center justify-around">
        <div className="flex">
          {MENU_DATA.map((item, index) => {
            return (
              <AccessButton
                link={item.link}
                content={item.content}
                key={index}
              />
            );
          })}
        </div>
        <div>
          <span className="text-white">
            User: {usrData.username}
          </span>
          &nbsp; &nbsp;
          <span className="text-white">
            LogIn at: {usrData.time}
          </span>

          &nbsp;
          &nbsp;
          <ButtonCall
            content={"LogOut"}
            event={() => {logOut()}}
          />
        </div>
      </header>
      {props.children}
    </>
  );
};

export default Frontend;
