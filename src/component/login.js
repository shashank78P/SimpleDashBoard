import React from "react"
import { useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';
const clientId = '386932037035-k8v833noqjk7m4auae0t83vnkrqvvg3t.apps.googleusercontent.com';


const LogIn = (props) => {
    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientId: clientId,
                scope: '',
            });
        };
        gapi.load('client:auth2', initClient);
    })
   
    const onSuccess = (res) => {
        props.getLoginDetails({
            name: res.profileObj.name,
            email: res.profileObj.email,
            imageUrl: res.profileObj.imageUrl,
            loginStatus: true
        });
    };
    
    const onFailure = (err) => {
        props.getLoginDetails("null");
    };



    return (
        <>
            <div className="center full_size login_pg" >
                <div className="login_btn_frame">
                    <GoogleLogin
                        clientId={clientId}
                        buttonText="Sign in with Google"
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                        cookiePolicy={'single_host_origin'}
                        isSignedIn={true}
                    />
                </div>
            </div>
        </>
    )
}

export default LogIn;