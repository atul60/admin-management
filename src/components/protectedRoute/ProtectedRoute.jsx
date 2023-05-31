import { ComponentType, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = (props) => {
    const Component = props.component;
    const navigate = useNavigate();
    const isLogin = localStorage.getItem('isLoggedIn');

    useEffect(() => {
        if(!isLogin) {
            navigate('/');
        }
    })

    return (
        <>
            {isLogin && <Component />}
        </>


    )
}

export default ProtectedRoute;