import React, {useState} from 'react';
import FacebookLogin from 'react-facebook-login';
import { Image } from 'react-bootstrap';
import {useHistory} from "react-router-dom";
import axios from "axios";

require('dotenv').config();

function FacebookOauth() {

    const history = useHistory();

    const [login, setLogin] = useState(false);
    const [data, setData] = useState({});
    const [picture, setPicture] = useState('');

    const APP_ID = process.env.REACT_APP_FACEBOOK_APP_ID;

    //behöver ladda om sidan en gång för att logga ut knappen/fb bilden ska dyka upp 
    const responseFacebook = (response) => {
        setData(response);
        setPicture(response.picture.data.url);
        //save token here from facebook user 
        localStorage.setItem("jwt", response.accessToken);
        localStorage.setItem("userId", "facebook");
        localStorage.setItem("userFb", response.userID);

          axios.get(`http://localhost:1337/open-auths?userID=${response.userID}`).then(function(openAuthData){
          const openAuthUser = openAuthData.data;
          localStorage.setItem("fbId", openAuthData.data[0].id);
        
        if(!openAuthUser[0]){
        axios
    .post('http://localhost:1337/open-auths', {
    email: response.email,
    name: response.name,
    userID: response.userID
    })}
  }
  )
    if (response.accessToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
    history.push("/");
  }
    
    return (
        <>
       <div className="container"> 
       
          {!login &&
            <FacebookLogin
              appId={APP_ID}
              autoLoad={true}
              fields="name,email,picture"
              scope="public_profile,email,user_friends"
              callback={responseFacebook}
              icon="fa-facebook" />
          }
         
          {login &&
            <Image src={picture} roundedCircle />
          }
    
        </div>
        
        </>
    )
}

export default FacebookOauth;