import React, { useState, useRef, useEffect } from 'react'
import styled from "styled-components"
import heroBcg from '../assets/heroBcg.png'
import { FaUser } from 'react-icons/fa'
import { RiLockPasswordFill } from 'react-icons/ri'
import { Link } from "react-router-dom"
import axios from 'axios'
import history from '../utils/history'
import { url } from '../utils/constants'
import Loading from '../Components/Loading'
function Login() {
    const [loggedIn, setIsLoggedIn] = useState(false)
    const [details, setDetails] = useState({ username: "", password: "", remember: false })
    const { username, password, remember } = details
    const [toggle, setToggle] = useState(false)
    const [loading,setLoading] = useState(false)
    const passRef = useRef()

    useEffect(() => {
        return () => {
            window.location.reload()
        }
    }, [loggedIn])


    function updateDetails(e) {
        let name = e.target.name
        if (name === "remember") {
            setDetails({ ...details, [name]: e.target.checked })
        }
        else {
            setDetails({ ...details, [name]: e.target.value })
        }

    }
    function handleSubmit(e) {
        e.preventDefault()
        setLoading(true)
        axios.post(url + "login", { email: username, password: password })
            .then((res) => { 
                history.push({ pathname: "/home" }); 
                localStorage.setItem("token", res.data.jwtToken);
                localStorage.setItem("userName",res.data.userName) ;
                setIsLoggedIn(true);
                setLoading(false);
            })
    }
    function togglePassword() {
        setToggle(!toggle)
        !toggle ? passRef.current.type = "text" : passRef.current.type = "password"
    }
    if(loading){
        return <Loading/>
    }
    return (
        <Wrapper className="section section-center">
            <div className="image-container">
                <img src={heroBcg} alt="herobcg"></img>
                <Link to="/signup">Create an account</Link>
            </div>
            <div className="login-container">
                <h1>Sign in</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <FaUser />
                        <input type="email" name="username" placeholder="User Name" value={username} onChange={updateDetails}></input>
                    </div>
                    <div className="form-control">
                        <label htmlFor="password"><RiLockPasswordFill /></label>
                        <input type="password" ref={passRef} name="password" placeholder="Password" value={password} onChange={updateDetails}></input>
                        <button type="button" onClick={togglePassword}>{toggle ? "Hide" : "Show"}</button>
                    </div>
                    <div className="form-checkbox">
                        <input type="checkbox" name="remember" value={remember} onChange={updateDetails}></input>
                        <label htmlFor="remeber">Remember me</label>
                    </div>
                    <button className="btn" type="submit">Log in</button>
                </form>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display:grid;
    grid-template-columns:1fr;
    row-gap:3rem;
    width:50vw;
    min-height:60vh;
    .image-container{
        img{
            width:100%;
            height:350px;
            border-radius:10px;
            margin-bottom:10px;
        }
        a{
            display:flex;
            justify-content:center;
            color:rgb(5, 5, 26);
            letter-spacing:1px;
            text-decoration:underline;
        }
    }
    .login-container{
        h1{
            color:rgb(63, 63, 125);
            letter-spacing:1px;
            margin:0;
            margin-bottom:40px;
            font-weight:bolder;
            font-size:40px;
        }
        form{
            .form-control{
                margin-bottom:30px;
                position:relative;
                input{
                    width:80%;
                    border:none;
                    background:transparent;
                    font-size:17px;
                    padding-left:30px;
                    padding-bottom:10px;
                    border-bottom:1px solid rgb(130, 120, 120);
                }
                svg{
                    position:absolute;
                    top:2px;
                }

                input:focus{
                    outline:none;
                    border-bottom:1px solid black;
                }

                input:focus::placeholder{
                    color:black;
                }
                input:-webkit-autofill {
                    -webkit-background-clip: text;
                }
                button{
                    position:absolute;
                    right:15%;
                    top:2px;
                    border:none;
                    background-color:lightgreen;
                    color:black;
                    padding:5px;
                    border-radius:3px;

                }
            }
            
            .form-checkbox{
                display:flex;
                align-items:center;
                margin-bottom:40px;
                label{
                    margin-left:15px;
                }
            }
            
        }
    }
    @media (min-width:992px){
        width:95vw;
        grid-template-columns:1fr 1fr;
        column-gap:100px;
        align-items:center
       
    }
    
`
export default Login