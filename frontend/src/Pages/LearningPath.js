import styled from "styled-components"
import React, { useState ,useEffect} from 'react'
import axios from 'axios'
import { url } from '../utils/constants'
import { Link } from "react-router-dom";
import PageHero from "../Components/PageHero";
import Loading from '../Components/Loading'
const token = localStorage.getItem("token")
export default function LearningPath(){
    const [learningPaths,setLearningPaths] = useState([])
    const [loading,setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        axios.get(url + 'get-learning-paths', {
            headers: {
                Authorization: "Bearer " + token
            }
        }).then((res) => {setLearningPaths(res.data);setLoading(false)})
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    if(loading){
        return <Loading/>
    }
    if (learningPaths.length === 0) {
        return (
            <React.Fragment>
                <PageHero title="Learning Paths" />
                <Wrapper className="section-center">
                    <h1>There are no Learning Paths</h1>
                    <Link className="btn" to="/add-learning-path">CREATE ONE</Link>
                </Wrapper>
            </React.Fragment>
        )
    }
    return(
        <React.Fragment>
            <PageHero title="Learning Paths"/>
            <Wrapper className="section-center">
                <h2>LEARNING PATHS</h2>
                <Link className="btn" to="/add-learning-path">CREATE ONE</Link>
                {
                    learningPaths.map((learning) => {
                        return (

                            <Link className="link" key={learning.learningPathId} to={`/learning-paths/${learning.learningPathId}`} >
                                <h3>{learning.name}</h3>
                                <p>{learning.category}</p>
                            </Link>
                        )
                    })
                }
            </Wrapper>
        </React.Fragment>
    )
} 

const Wrapper = styled.div`
    min-height:65vh;
    width:50vw;
    h1{
        text-align:center;
        color:rgb(24, 24, 60);
        font-size:40px;
    }
    .btn{
        display:block;
        width:125px;
        margin:0 auto;
        padding:7px 10px;
        font-size:15px;
        margin-bottom:20px;
    }
    h2{
        color:rgb(26, 26, 45);
        letter-spacing:1px;
        text-align:center;
        padding:5px 0;
        border-bottom:4px solid rgb(176, 146, 146);
        border-top:4px solid rgb(176, 146, 146);
    }
    .link{
        display:flex;
        align-items:center;
        justify-content:space-between;
        background-color:rgb(238, 200, 186);
        border-radius:5px;
        padding:10px;
        border-left:10px solid rgb(176, 146, 146);
        h3{
            margin:0;
            color:rgb(26, 26, 45);
            letter-spacing:1px;
            padding:3px 0;
        }
        p{
            margin:0;
            font-weight:500;
            letter-spacing:1px;
            font-size:15px;
            background-color:rgb(176, 146, 146);
            border-radius:5px;
            padding:5px;
            color:white;
        }
    }
`