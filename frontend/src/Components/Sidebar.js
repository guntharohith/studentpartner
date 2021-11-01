import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { FaTimes, FaUserMinus } from 'react-icons/fa'
import { CgNotes} from 'react-icons/cg'
import { SiFuturelearn, SiBookstack} from 'react-icons/si'
import { useEffect } from 'react';
import { useLocalStorage } from '../utils/constants';
import styled from 'styled-components'
import {useLearningContext} from '../context/learningpartner'

function Sidebar() {
    const {isSideBarOpen,closeSideBar} = useLearningContext()
    const userName = localStorage.getItem("userName")
    const [token, setToken] = useLocalStorage("token", "")
    useEffect(() => {
        return () => {
            window.location.reload()
        }
    }, [token])
    return (
        <Wrapper>
            <aside className={`${isSideBarOpen ? 'sidebar sidebar-open' : 'sidebar'}`}>
                <div className="sidebar-header">
                    <Link to="/home">
                        <img src={logo} className="logo" alt="comfy sloth"></img>
                    </Link>
                    <button type="button" className="close-btn" onClick={closeSideBar}><FaTimes /></button>
                </div>
                <h3 className="name">Welcome  {userName} </h3>
                <ul className="sidebar-links">
                    <li><Link onClick={closeSideBar} to="/learning-paths"><SiFuturelearn/>Learning-Paths</Link></li>
                    <li><Link onClick={closeSideBar} to="/notes"><CgNotes/>Notes</Link></li>
                    <li><Link onClick={closeSideBar} to="/resources"><SiBookstack/>Resources</Link></li>
                    <li><Link to="/login" onClick={() => { setToken(""); localStorage.setItem("userName","") }}><FaUserMinus/>Logout</Link></li>
                </ul>
            </aside>
        </Wrapper>
    ) 
}
const Wrapper = styled.div`
    .logo{
        height:60px;
        width:200px;
        border-radius:5px;
    }
    .sidebar{
        position: fixed;
        top:0;
        left:0;
        width: 100%;
        height: 100%;
        z-index: -1;
        background: #fff;
        transition: all 0.3s linear;
        transform: translate(-100%);
        h3{
            font-weight:500;
            color:rgb(26, 26, 45);
            letter-spacing:1px;
            font-size:1.2rem;
            text-transform:capitalize;
            margin-left:2rem;
            padding-bottom:5px;
            border-bottom:4px solid rgb(176, 146, 146);

        }
    }
    .sidebar-open{
        z-index: 999;
        transform: translate(0);
    }
    .sidebar-header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding:1rem 1.5rem;
    }
    .close-btn{
        background: none;
        border:none;
        font-size: 2rem;
        color:red;
    }
    .sidebar-links{
        list-style-type: none;
        margin-bottom: 2rem;
        margin-left:2rem;
    }
    .sidebar-links li{
        width:200px;
        display: block;
        padding:1rem 1rem;
        transition:all 0.3s linear;
        border-bottom:1px solid rgb(176, 146, 146);
    }
    .sidebar-links a{
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
    .sidebar-links li:hover{
        padding-left:3rem;
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

    @media screen and (min-width: 992px){
        .sidebar{
            display:none;
        }
    }
`
export default Sidebar;