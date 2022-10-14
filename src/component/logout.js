import React from "react"
import { useEffect } from 'react';
import { GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';
const clientId = '386932037035-k8v833noqjk7m4auae0t83vnkrqvvg3t.apps.googleusercontent.com';
const Logout = (props) => {
    console.log(props);
    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientId: clientId,
                scope: '',
            });
        };
        gapi.load('client:auth2', initClient);
    })

    const logout1 = () => {
        props.log_out("null");
    };

    return (
        <>
            <GoogleLogout
                    clientId={clientId}
                    buttonText="Log out"
                    onLogoutSuccess={logout1}
                />
        </>
    )
}

export default Logout;