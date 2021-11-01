import styled from "styled-components"
import PageHero from "../Components/PageHero"
import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import {AiOutlineRight } from 'react-icons/ai'
import axios from 'axios'
import { url } from '../utils/constants'
import { Link } from "react-router-dom"
import { BiLink } from "react-icons/bi"
import Loading from '../Components/Loading'
const token = localStorage.getItem("token")
export default function SingleLearningPath(){
    const { id } = useParams()
    const [lp,setLP] = useState({name:"",topics:[]})
    const [modal,setModal] = useState(false)
    const [noteDes,setNotes] = useState()
    const [loading,setLoading] = useState(false)
    const [currTopic,setCurrTopic] = useState({
        topicId:"",
        topicName:"",
        topicDes:"",
        resources:[],
        assessments:[]
    })
    useEffect(() => {
        setLoading(true)
        axios.get(url+"get-learning-path/"+id,{
            headers:{
                Authorization:"Bearer " + token
            }
        }).then((res) => {setLP(res.data);setLoading(false)} )
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    function handleNote(e){
        e.preventDefault()
        axios.post(url+"add-note",{
            noteName:currTopic.topicName,
            noteDes:noteDes
        },{
            headers:{
                Authorization:"Bearer " + token
            }
        })
        setModal(false)
    }
    if(loading){
        return <Loading/>
    }
    return(
        <React.Fragment>
            <PageHero title={lp.name} single/>
            <Wrapper className="section-center">
                <div className="topics">
                    {
                        lp.topics.map((topic) => {
                            return <h3 className={`${topic.topicId === currTopic.topicId ? "active":null}`} key={topic.topicId} onClick={()=>setCurrTopic(topic)}>{topic.topicName}<AiOutlineRight/></h3>
                        })
                    }
                </div>
                <div className="right">
                    <h2>{lp.name}</h2>
                    {currTopic.topicName !== "" &&
                        <div className="topic-item">
                            <h3>{currTopic.topicName}</h3>
                            <p>{currTopic.topicDes}</p>
                            <div className="resources">
                                <h3>Resources</h3>
                                {
                                    currTopic.resources.map((res) => {
                                        return <Link key={res.resourseId} to={res.resouceLink}><BiLink />{res.resourceLink}</Link>
                                    })
                                }
                            </div>
                            <div className="assessments">
                                <h3>Assessments</h3>
                                {
                                    currTopic.assessments.map((assess) => {
                                        return <Link key={assess.assessmentId} to={assess.assessmentLink}><BiLink />{assess.assessmentLink}</Link>
                                    })
                                }
                            </div>
                            <button className="btn" onClick={()=>setModal(!modal)}>Add Notes</button>
                            { modal && 
                                <form onSubmit={handleNote}>
                                    <div className="form-control">
                                        <textarea rows={10} type="text" name="notes" value={noteDes} onChange={(e)=>setNotes(e.target.value)} placeholder="Topic Description"></textarea>
                                    </div>
                                    <div className="btn-group">
                                        <button type="submit" className="btn">SAVE</button>
                                        <button type="button" className="btn" onClick={()=>setModal(false)}>CLOSE</button>
                                    </div>
                                </form>
                            }
                        </div>
                    }
                    
                </div>
            </Wrapper>
        </React.Fragment>
    )
}

const Wrapper = styled.div`
    display:grid;
    grid-template-columns:1fr;
    margin-top:30px;
    margin-bottom:30px;
    min-height:65vh;
    .topics{
        background-color:rgb(238, 200, 186);
        padding:10px;
        .active{
            background-color:hsl(22, 31%, 52%);
            border-top-left-radius:5px;
            border-bottom-left-radius:5px;
            color:hsl(22, 31%, 88%);
            svg{
                color:hsl(22, 31%, 88%);
            }
        }
        h3{
            display:flex;
            align-items:center;
            justify-content:space-between;
            text-decoration: none;
            color: rgb(81, 81, 116);
            font-size: 1rem;
            text-align: left;
            letter-spacing: 1px;
            font-weight:bolder;
            padding:0.5rem;
            transition:all 0.3s linear;
            border-bottom:1px solid rgb(176, 146, 146);
            svg{
                color:rgb(81, 81, 116);
                font-size:1rem;
                margin-right:15px;
            }
        }
        h3:hover{
            padding-left:3rem;
            background-color:hsl(22, 31%, 52%);
            border-top-left-radius:5px;
            border-bottom-left-radius:5px;
            color:hsl(22, 31%, 88%);
            svg{
                color:hsl(22, 31%, 88%);
            }
        }
    }
    .right{
        background-color:rgb(249, 244, 242);
        padding:20px;
        h2{
            margin:0;
            text-align:center;
            color:rgb(26, 26, 45);
            letter-spacing:1px;
        }
        .topic-item{
            padding:10px;
            border-radius:5px;
            margin-bottom:20px;
            .btn{
                margin-top:15px;
            }
            a{
                display:block;
                margin-bottom:5px;
                letter-spacing:1px;
                font-weight:500;
                font-size:15px;
                display:flex;
                align-items:center;
                svg{
                    margin-right:10px;
                }
            }
            h3{
                margin:0;
                color:rgb(26, 26, 45);
                letter-spacing:1px;
                border-bottom:2px solid rgb(176, 146, 146);
                padding:5px 0;
                margin-bottom:10px;
            }
            p{
                margin:0;
                font-weight:500;
                letter-spacing:1px;
                margin-bottom:5px;
                font-size:15px;
            }
            form{
                width:300px;
                border:2px solid rgb(194, 158, 158);
                border-radius:5px;
                padding:10px;
                margin-top:20px;
                textarea{
                    width:100%;
                    border:none;
                    border-bottom:2px solid rgb(194, 158, 158);
                    padding-bottom:5px;
                    background:transparent;
                }
                textarea:focus{
                    outline:none;
                    border-bottom:2px solid black;
                }
                textarea::placeholder{
                    letter-spacing:1px;
                    font-weight:bold;
                }
                textarea:focus::placeholder{
                    color:black;
                }
                .btn-group{
                    display:flex;
                    justify-content:space-between;
                    .btn{
                        font-size:12px;
                    }
                }
                
            }
        }
    }
    @media screen and (min-width:786px){
        grid-template-columns:300px 1fr;
    }
`