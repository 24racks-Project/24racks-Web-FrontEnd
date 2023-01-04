import React from "react";
import './Setting.css';
import ModifyPassword from "./ModifyPassword/ModifyPassword";

function Setting(){
    return <div className="Setting">
        <div className="SettingElem">
            <ModifyPassword/>
        </div>
    </div>;
}



export default Setting;