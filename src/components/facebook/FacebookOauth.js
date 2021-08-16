import React, {useState} from 'react';
import FacebookLogin from 'react-facebook-login';
import { Image } from 'react-bootstrap';
import {useHistory} from "react-router-dom";

require('dotenv').config();

function FacebookOauth() {

    const history = useHistory();

    const [login, setLogin] = useState(false);
    const [data, setData] = useState({});
    const [picture, setPicture] = useState('');

    const APP_ID = process.env.REACT_APP_FACEBOOK_APP_ID;

    //behöver ladda om sidan en gång för att logga ut knappen/fb bilden ska dyka upp 
    const responseFacebook = (response) => {
        console.log(response);
        setData(response);
        setPicture(response.picture.data.url);
        //save token here from facebook user 
        console.log(response.accessToken)
        localStorage.setItem("jwt", response.accessToken)
    if (response.accessToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
    history.push("/")
  }

 /*  om vi vill lägga till fbanvändare?
 const responseFacebook = (response) => {
    console.log(response);
    setData(response);
    setPicture(response.picture.data.url);
    localStorage.setItem("jwt", response.accessToken);
    // function onHandleSubmit(e){
    // e.preventDefault();
    axios
    .post('http://localhost:1337/auth/local/register', {
    
    email: "hej@hej.som",
    password: response.id,
    username: response.name,
    name: response.name
    
    })
    .then ( response => {
    localStorage.setItem("userInfo", response.id);
    localStorage.setItem("userAdmin", response.admin);
    
    })
 */
  /*axios
        .post('http://localhost:1337/auth/local/register', {
        firstname: response.name
        //lastname: registerValues.lastname, 
    }) */
    
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