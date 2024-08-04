import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import App from '../App';
import Main from '../dashboard/Main';
import { SignUp, useUser } from '@clerk/clerk-react';
import axios from 'axios';  // Assuming you are using axios for API calls
import ProjectDetails from '../dashboard/dComponents/projects/ProjectDetails';

function RoutesController() {
    const { isSignedIn, user } = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        if (isSignedIn) {
            const fetchData = async () => {
                try {
                   // console.log(user.id)
                    const response = await axios.get(`${import.meta.env.VITE_API_URL}/user/read-users/${user.id}`,{
                        clerkID : user.id
                    });
                    if(response.data.message === 'User not found'){
                        //console.log(user)
                        const SaveResponse = await axios.post(`${import.meta.env.VITE_API_URL}/user/create-user`,{
                            username : user.fullName,
                            email : user.primaryEmailAddress.emailAddress,
                            profilePicture : user.imageUrl,
                            clerkID : user.id
                        })
                        if(SaveResponse.data.success === true){
                            navigate('/dashboard')
                        }

                        else{
                            alert(SaveResponse.data.message)
                        }
                    }

                    else if(response.data.success === false){
                        alert(response.data.message)
                    }
                    //console.log(user)
                } catch (error) {
                    console.error('API call error:', error);
                }
            };

            fetchData();
        }
    }, [isSignedIn, user]);

    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/project-details/:projectId" element={<ProjectDetails />} />
            
            <Route path="/dashboard" element={
                isSignedIn ? <Main /> : (
                    <div style={{
                        display: 'flex',
                        justifyContent: "center",
                        alignItems: "center",
                        height: '100vh',
                        background: '#111'
                    }}>
                        <SignUp />
                    </div>
                )
            } />
        </Routes>
    );
}

export default RoutesController;
