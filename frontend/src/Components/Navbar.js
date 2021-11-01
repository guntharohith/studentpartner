import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import styled from "styled-components";
import logo from "../assets/logo.png"
import {useLearningContext} from  '../context/learningpartner'
import {FaUserMinus} from 'react-icons/fa'
import { AiOutlineDown, AiOutlineRight} from 'react-icons/ai'
import { useLocalStorage } from '../utils/constants';
import { useState,useEffect } from 'react';
function Navbar() {
    const {openSideBar} = useLearningContext()
    const [isMenuOpen,setMenu] = useState(false)
    const [token, setToken] = useLocalStorage("token", "")
    const userName = localStorage.getItem("userName")
    useEffect(() => {
        return () => {
            window.location.reload()
        }
    }, [token])
    return (
        <Wrapper>
            <div className="navbar-center">
                <div className="navbar-header">
                    <Link to="/home">
                        <img src={logo} alt="StudentPartner" />
                    </Link>
                    <button type="button" className="navbar-toggle" onClick={openSideBar}><FaBars className="navbar-icon" /></button>
                </div>
                <ul className="nav-links">
                    <li><Link to="/learning-paths">Learning-Paths</Link></li>
                    <li><Link to="/notes">Notes</Link></li>
                    <li><Link to="/resources">Resources</Link></li>
                </ul>
                <div className="menu-group">
                    <h3 className="name">{userName} 
                        {isMenuOpen ? <AiOutlineDown onClick={() => setMenu(!isMenuOpen)} /> : <AiOutlineRight onClick={() => setMenu(!isMenuOpen)}/> }</h3>
                    {isMenuOpen && <ul className="menu">
                        <li><Link to="/login" onClick={()=>{setToken("");localStorage.setItem("userName","");setMenu(false)}}><FaUserMinus/>Logout</Link></li>
                    </ul>}
                </div>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.nav`
    height:12vh;
    display:flex;
    align-items: center;
    justify-content: center;

    .navbar-toggle{
        background-color: transparent;
        border: none;
        color:green;
    }
    .navbar-icon{
        font-size: 2rem;
    }
    .navbar-center{
        width: 90vw;
        margin:0 auto;
        max-width:1178px;
    }
    .navbar-header{
        display:flex;
        align-items: center;
        justify-content: space-between;
        img{
            height:60px;
            width:200px;
            border-radius:5px;
        }
    }
    .nav-links{
        display: none;
    }
    .menu-group{
        display:none;
    }
    @media (min-width:992px)  {
        .menu-group{
            display:block;
            position:relative;
            h3{
                display:flex;
                align-items:center;
                font-weight:500;
                color:rgb(26, 26, 45);
                letter-spacing:1px;
                font-size:1.2rem;
                text-transform:capitalize;
                svg{
                    margin-left:5px;
                    font-size:1rem;
                }
            }
            .menu{
                position:absolute;
                margin:0;
                left:0;
                background-color:hsl(22, 31%, 88%);
                border-radius:5px;
                z-index:1;
                li{
                    width:100px;
                    display: block;
                    padding:1rem 1rem;
                    transition:all 0.3s linear;
                    a{
                        display:flex;
                        align-items:center;
                        text-decoration: none;
                        color: rgb(81, 81, 116);
                        font-size: 1rem;
                        text-align: left;
                        letter-spacing: 1px;
                        font-weight:bolder;
                        svg{
                            color:rgb(81, 81, 116);
                            font-size:1rem;
                            margin-right:15px;
                        }
                    }
                }
                li:hover{
                    padding-left:1.5rem;
                    background-color:hsl(22, 31%, 52%);
                    border-top-left-radius:5px;
                    border-bottom-left-radius:5px;
                    a{
                        color:hsl(22, 31%, 88%);
                        svg{
                            color:hsl(22, 31%, 88%);
                        }
                    }
                }
            }
        }
        .navbar-toggle{
            display:none;
        }
        .navbar-center{
            width:95vw;
            display:grid;
            grid-template-columns: auto 1fr auto;
            align-items: center;
        }
        .nav-links{
            display: flex;
            justify-content: center;
            list-style-type: none;
            li{
                margin:0 0.8rem;
            }
            a{
                text-decoration: none;
                font-size: 1.3rem;
                letter-spacing: 1px;
                color: rgb(82, 82, 143);
                font-size:16px;
                font-weight:bolder;
            }
            a:hover{
                padding-bottom:4px;
                border-bottom: 2px solid green;
            }
        }
        
    }
`
export default Navbar;