import React, {useState} from 'react'
import FacebookLogin from 'react-facebook-login';
import { Card, Image } from 'react-bootstrap';

function FacebookOauth() {

    const [login, setLogin] = useState(false);
    const [data, setData] = useState({});
    const [picture, setPicture] = useState('');

    const responseFacebook = (response) => {
        console.log(response);
        setData(response);
        setPicture(response.picture.data.url);
    if (response.accessToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }

  //FUNKAR DEN HÄR??? 
  function LogOutFacebook() {
    window.FB.logout()
  }

    return (
        <>
        <div class="container">
        <Card style={{ width: '600px' }}>
        <Card.Header>
          {!login &&
            <FacebookLogin
              appId="369134877891786"
              autoLoad={true}
              fields="name,email,picture"
              scope="public_profile,user_friends"
              callback={responseFacebook}
              icon="fa-facebook" />
          }
          {login &&
            <Image src={picture} roundedCircle />
          }
        </Card.Header>
        {login &&
          <Card.Body>
            <Card.Title>{data.name}</Card.Title>
            <Card.Text>
              {data.email}
            </Card.Text>
          </Card.Body>
        }
        </Card>
        </div>
        <button onClick={LogOutFacebook}>Logga ut facebook</button>
        </>
    )
}

export default FacebookOauth;