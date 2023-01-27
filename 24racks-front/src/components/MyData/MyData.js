import {getDataUser} from '../../store/MyData/actions';
import React, {useState, useEffect} from "react";
import {connect} from 'react-redux';
import './MyData.css';

function MyData({getDataUser}){
    const [dataUser, setDataUser] = useState({});
    
    useEffect(() => {
        getDataUser(setDataUser);
    }, [getDataUser]);

    return <div className="Mydata">
        <div className="MyDataElem">
            <p>UserName: {dataUser.username}</p>
            <p>Phone: {dataUser.phone}</p>
            <p>Email: {dataUser.email}</p>
        </div>
    </div>;
}

export default connect(null, {getDataUser})(MyData);