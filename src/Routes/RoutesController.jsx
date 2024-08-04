import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from '../App';
import Main from '../dashboard/Main';
import { SignUp, useUser } from '@clerk/clerk-react';

function RoutesController() {
    const { isSignedIn } = useUser();

    return (
        <>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/dashboard" element={
                    isSignedIn ? <Main /> : <>
                        <div style={{
                            display : 'flex',
                            justifyContent : "center",
                            alignItems : "center",
                            height : '100vh',
                            background : '#111'
                        }}>

                        <SignUp />

                        </div>
                    </>
                } />
            </Routes>
        </>
    );
}

export default RoutesController;
