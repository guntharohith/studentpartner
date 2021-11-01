import React, { useState, useRef } from "react"
import styled from "styled-components"
import heroBcg from '../assets/heroBcg.png'
import { FaUser } from 'react-icons/fa'
import { RiLockPasswordFill} from 'react-icons/ri'
import { IoMdMail } from 'react-icons/io'
import { Link, useHistory } from 'react-router-dom'
import axios from "axios"
import { url } from '../utils/constants'
function Signup() {
    const history = useHistory()
    const [userDetails, setUserDetails] = useState({ firstName: "", lastName:"", email: "", password: "", repassword: "", remember: false })
    const { firstName, lastName, email, password} = userDetails
    const [toggle, setToggle] = useState(false)
    const passRef = useRef()
    function changeDetails(e) {
        setUserDetails({ ...userDetails, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        axios.post(url + "signup", {
            firstName:firstName,
            lastName:lastName,
            email: email,
            password: password
        }).then(
            (res) => {
                history.push({ pathname: "/login" })
            }
        )
    }
    function togglePassword() {
        setToggle(!toggle)
        !toggle ? passRef.current.type = "text" : passRef.current.type = "password"
    }
    return (
        <Wrapper className="section section-center">
            <div className="signup-container">
                <h1>Sign up</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <FaUser />
                        <input type="text" name="firstName" placeholder="First Name" value={firstName} onChange={changeDetails}></input>
                    </div>
                    <div className="form-control">
                        <FaUser />
                        <input type="text" name="lastName" placeholder="Last Name" value={lastName} onChange={changeDetails}></input>
                    </div>
                    <div className="form-control">
                        <IoMdMail />
                        <input type="email" name="email" placeholder="Your Email" value={email} onChange={changeDetails}></input>
                    </div>
                    <div className="form-control">
                        <RiLockPasswordFill />
                        <input type="password" name="password" ref={passRef} placeholder="Password" value={password} onChange={changeDetails}></input>
                        <button type="button" onClick={togglePassword}>{toggle ? "Hide" : "Show"}</button>

                    </div>
                    <button type="submit" className="btn">Sign up</button>
                </form>
            </div>
            <div className="image-container">
                <img src={heroBcg} alt="herobcg"></img>
                <Link to="/login">I am already a member</Link>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display:grid;
    grid-template-columns:1fr;
    row-gap:3rem;
    min-height:60vh;
    width:50vw;
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
    .signup-container{
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
                    bottom:10px;
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
        align-items:center;
    }
`

export default Signup