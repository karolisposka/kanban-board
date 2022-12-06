import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';

type props = {
    user: string | null,
    path: string
}
const privateRoute = ({user, path}: props) => {
    if(!user){
        return <Navigate to={path} replace/>
    }
    return <Outlet/>;
}

export default privateRoute