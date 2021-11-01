import styled from "styled-components";
import { BiLink } from 'react-icons/bi'
import React, {useState} from 'react'
import axios from 'axios'
import { url } from '../utils/constants'
import { Link } from "react-router-dom";
import PageHero from "../Components/PageHero";
import Loading from '../Components/Loading'
const token = localStorage.getItem("token")
export default function AddLearningPath(){
    const [topicModal,setTopicModal] = useState(false)
    const [resources,setResources] = useState([])
    const [assessments,setAssessments] = useState([])
    const [topics,setTopics] = useState([])
    const [loading, setLoading] = useState(false)
    const [learningPath, setLearningPath] = useState({
        name:"",
        category: "",
        type:"public",
        topicName:"",
        topicDes:"",
        resourceLink:"",
        assessmentLink:""

    })
    const { name,category,type,topicName,topicDes,resourceLink,assessmentLink} = learningPath
    function onChange(e) {
        setLearningPath({ ...learningPath, [e.target.name]: e.target.value })
    }

    function handleSubmit(e){
        e.preventDefault()
        setLoading(true)
        axios.post(url+'add-learning-path',{
            name:name,
            category:category,
            type:type,
            topics:topics
        },{
            headers:{
                Authorization:"Bearer " + token
            }
        }).then((res) => {setLoading(false)})
        setLearningPath({
            name: "",
            category: "",
            type: "public",
            topicName: "",
            topicDes: "",
            resourceLink: "",
            assessmentLink: ""})
        setTopics([])
    }
    function handleTopic(){
        setTopics([...topics,{topicName,topicDes,resources,assessments}])
        setLearningPath({...learningPath,topicName:"",topicDes:""})
        setAssessments([])
        setResources([])
    }
    if(loading){
        return <Loading/>
    }
    return(
        <React.Fragment>
            <PageHero title="Add Learning Path"/>
            <Wrapper className="section-center">
                <div className="left">
                    <form className="resource-form" onSubmit={handleSubmit}>
                        <div className="form-control">
                            <input type="text" name="name" value={name} onChange={onChange} placeholder="Learning Path Name"></input>
                        </div>
                        <div className="form-control">
                            <input type="text" name="category" value={category} onChange={onChange} placeholder="Category"></input>
                        </div>
                        <div className="form-control">
                            <label>Rating:</label>
                            <select name="type" value={type} onChange={onChange}>
                                <option value="public">Public</option>
                                <option value="private">Private</option>
                            </select>
                        </div>
                        <button type="button" className="btn add-learning-path" onClick={() => setTopicModal(!topicModal)}>Add Topic</button>
                        {topicModal && <div className="topic">
                            <div className="form-control">
                                <input type="text" name="topicName" value={topicName} onChange={onChange} placeholder="Topic Name"></input>
                            </div>
                            <div className="form-control">
                                <textarea rows={4} type="text" name="topicDes" value={topicDes} onChange={onChange} placeholder="Topic Description"></textarea>
                            </div>
                            <div className="form-control link">
                                <input type="text" name="resourceLink" value={resourceLink} onChange={onChange} placeholder="Resource Link"></input>
                                <button className="btn" type="button" onClick={() => {
                                    setResources([...resources, { resourceLink }]);
                                    setLearningPath({ ...learningPath, resourceLink: "" })
                                }}>Add</button>
                            </div>
                            <div className="form-control link">
                                <input type="text" name="assessmentLink" value={assessmentLink} onChange={onChange} placeholder="Assessment Link"></input>
                                <button className="btn" type="button" onClick={() => {
                                    setAssessments([...assessments, { assessmentLink }]);
                                    setLearningPath({ ...learningPath, assessmentLink: "" })
                                }}>Add</button>
                            </div>
                            <button className="btn add-learning-path" type="button" onClick={handleTopic}>Save Topic</button>
                        </div>}
                        <div className="btn-group">
                            <button type="submit" className="btn">SAVE</button>
                            <button type="button" onClick={() => {
                                setLearningPath({
                                    name: "",
                                    category: "",
                                    type: "",
                                    topicName: "",
                                    topicDes: "",
                                    resourceLink: "",
                                    assessmentLink: ""
                                })
                            }} className="btn">CANCEL</button>
                        </div>

                    </form>

                </div>

                <div className="topics">
                    <h2>Topics Added</h2>
                    {
                        topics.map((topic) => {
                            return (
                                <div className="topic-item">
                                    <h3>{topic.topicName}</h3>
                                    <p>{topic.topicDes}</p>
                                    <div className="resources">
                                        <h3>Resources</h3>
                                        {
                                            topic.resources.map((res) => {
                                                return <Link to={res.resouceLink}><BiLink />{res.resourceLink}</Link>
                                            })
                                        }
                                    </div>
                                    <div className="assessments">
                                        <h3>Assessments</h3>
                                        {
                                            topic.assessments.map((assess) => {
                                                return <Link to={assess.assessmentLink}><BiLink />{assess.assessmentLink}</Link>
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </Wrapper>
        </React.Fragment>
        
    )
}

const Wrapper = styled.div`
    min-height:78vh;
    display:grid;
    grid-template-columns:1fr 1fr;
    margin-top:30px;
    column-gap:50px;
    align-items:start;
    
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
    .topics{
        h2{
            color:rgb(26, 26, 45);
            letter-spacing:1px;
            text-align:center;
            padding:5px 0;
            border-bottom:4px solid rgb(176, 146, 146);
            border-top:4px solid rgb(176, 146, 146);
        }
        .topic-item{
            background-color:rgb(238, 200, 186);
            padding:10px;
            border-radius:5px;
            margin-bottom:20px;
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

        }
    }
    .left{
        .add-learning-path{
            width:100%;
            justify-content:center;
            margin-top:15px;
            svg{
                margin-left:10px;
            }
        }
        .resource-form{
            border:2px solid rgb(194, 158, 158);
            border-radius:5px;
            padding:10px;
            margin:0 auto;
            margin-top:20px;
            
            .topic{
                border-bottom:2px solid rgb(194, 158, 158);
                padding-bottom:10px;
                margin-bottom:20px;
            }
            .form-control{
                margin-bottom:1rem;
                select{
                    margin-left:10px;
                    border:2px solid rgb(194, 158, 158);
                }
                label{
                    color:rgb(62, 74, 62);
                    letter-spacing:1px;
                    font-size:15px;
                    font-weight:500;
                }
            }
            .link{
                display:flex;
                .btn{
                    margin-left:15px;
                }
            }
            input,textarea{
                width:100%;
                border:none;
                border-bottom:2px solid rgb(194, 158, 158);
                padding-bottom:5px;
                background:transparent;
            }
            input:focus{
                outline:none;
                border-bottom:2px solid black;
            }
            textarea:focus{
                outline:none;
                border-bottom:2px solid black;
            }
            input::placeholder{
                letter-spacing:1px;
                font-weight:bold;
            }
            input:focus::placeholder{
                color:black;
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
                align-items:center;
            }
            .btn{
                padding:7px;
                font-size:12px;
            }

        }
    }

    
`