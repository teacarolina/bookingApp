import React, {useState} from 'react'
import axios from 'axios';
import FacebookLogin from 'react-facebook-login';
import { Card, Image } from 'react-bootstrap';
import {useHistory} from "react-router-dom";

require('dotenv').config()

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
  }

  /*axios
        .post('http://localhost:1337/auth/local/register', {
        firstname: response.name
        //lastname: registerValues.lastname, 
    }) */

  //FUNKAR DEN HÄR??? SKA JAG HA KVAR DEN??
  /*function LogOutFacebook() {
    window.FB.logout()
    window.location.reload()
  }*/

    return (
        <>
       <div className="container"> 
        <Card >
        <Card.Header>
          {!login &&
            <FacebookLogin
              appId={APP_ID}
              autoLoad={true}
              fields="name,email,picture"
              scope="public_profile,email,user_friends"
              callback={responseFacebook}
              icon="fa-facebook" />
          }
          {/** bilden syns fortfarande på inloggningssidan?? försök få bort och dubbelkolla
           * om man kan ändra knappen för facebook login
          */} 
          {login &&
            <Image src={picture} roundedCircle />
          }
        </Card.Header>
        {login &&
          <Card.Body>
          {/*   <Card.Title>{data.name}</Card.Title> */}
           {/*  <Card.Text>
              {data.email}
            </Card.Text> */}
          </Card.Body>
        }
        </Card>
        </div>
        
        </>
    )
}

// <button onClick={LogOutFacebook}>Logga ut facebook</button>

export default FacebookOauth;