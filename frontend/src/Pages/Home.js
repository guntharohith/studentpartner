import styled from "styled-components"
import heroBcg from '../assets/heroBcg.png'
export default function Home(){
    return (
        <Wrapper className="section-center">
            <div className="intro">
                <p>Learning is a continuous process throughout our lifetime. It is an imperative process for us to keep going in our lives, irrespective of our age, geography or profession. And the beautiful thing about learning is that nobody can take it away from you.
                    We all have our own style of self-learning, a methodology that keeps us focused on the end objective. From notebooks, to-do lists, whiteboards to mobile applications & online platforms, we use a lot of tools & resources to help us learn solo!</p>
                <img src={heroBcg} alt="heroBcg"></img>
            </div>
        </Wrapper>

    )
}

const Wrapper = styled.div`
    min-height:78vh;
    border-top:4px solid rgb(176, 146, 146);
    .intro{
        display:grid;
        grid-template-columns:1fr;
        align-items:center;
        margin-top:50px;
        img{
            display:none;
            height:500px;
            width:500px;
        }
        p{
            letter-spacing:1px;
            line-height:1.5rem;
        }
    }
    @media screen and (min-width:892px){
        .intro{
            grid-template-columns:1fr 1fr;
            align-items:center;
            column-gap:50px;
            margin-top:0;
            img{
                display:block;
            }
        }
    }

`