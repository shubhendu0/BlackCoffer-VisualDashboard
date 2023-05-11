import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    getUser
} from '../redux/features/auth/authActions'
import { Outlet, Navigate } from 'react-router-dom';

const ProtectedRoute = () => {
    const dispatch = useDispatch();
    const { user, isLoggedIn } = useSelector((state) => state.auth)

    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);
    
    if (user && isLoggedIn){
        return <Outlet/>    // returns child route elements
    }
    
    // navigate to login-page if no user is found in redux store
    return (
        <Navigate  to="/login"/> 
    )
}

export default ProtectedRoute;