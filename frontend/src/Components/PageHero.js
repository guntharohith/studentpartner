import { Link } from "react-router-dom"
import styled from "styled-components"

function PageHero({ title, single }) {

    return (
        <Wrapper>
            <div className="section-center">
                <h3>
                    <Link to="/home">Home </Link>
                    {single && <Link to="/learning-paths"> / Learning Paths</Link>} / {title}
                </h3>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color:rgb(238, 200, 186);
    height:15vh;
    display:flex;
    align-items:center;
    a{
        color:darkgreen;
    }
    a:hover{
        color:rgb(34, 52, 34);
    }
    h3{
        font-size:35px;
        color:rgb(34, 52, 34);
        text-transform:capitalize;
        letter-spacing:1px;
    }
   
    
`
export default PageHero