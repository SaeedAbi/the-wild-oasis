import {useUser} from "../hooks/useUser.js";
import Spinner from "./Spinner.jsx";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

const FullPage=styled.div`
height: 100vh;
    background-color: var(--color-grey-50);
    display: flex;
    align-items: center;
    justify-content: center;
`

function PortectedRoute({children}) {
    const navigate=useNavigate()
const {isLoading,isAuthenticated}=useUser()

    useEffect(() => {
        if (!isAuthenticated && !isLoading) navigate('/login')
    }, [isLoading,isAuthenticated,navigate]);

    if (isLoading) return<FullPage><Spinner/></FullPage>

    if (isAuthenticated) return children
}

export default PortectedRoute;