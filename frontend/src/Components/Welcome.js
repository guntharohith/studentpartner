import styled from 'styled-components'
import logo from "../assets/logo.png"
export default function Welcome(){
    return(
        <Wrapper className="section-center">
            <img src={logo} alt="logo"></img>
            <h1>Welcome to Student Partner</h1>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    padding:10px;
    border-bottom:4px solid rgb(176, 146, 146);
    img{
        height:60px;
        width:300px;
        border-radius:5px;
    }
    h1{
        display:none;
        margin:0;
        letter-spacing:1px;
        rgb(26, 26, 45);
        font-weight:500;
    }
    @media screen and (min-width:768px){
        h1{
            display:block;
        }
        img{
            width:200px;
        }
        justify-content:space-between;
    }
`