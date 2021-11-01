import styled from "styled-components";
import { IoMdAddCircle } from 'react-icons/io'
import React, { useEffect, useState } from "react";
import PageHero from "../Components/PageHero";
import axios from 'axios'
import { url } from '../utils/constants'
import { Link } from "react-router-dom";
import Loading from "../Components/Loading";
const token = localStorage.getItem("token")
export default function Resources() {
    const [modal, setModal] = useState(false)
    const [myResources, setMyResources] = useState([])
    const [publicResources, setPublicResources] = useState([])
    const [loading,setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        axios.get(url + 'get-public-resources', {
            headers: {
                Authorization: "Bearer " + token
            }
        }).then((res) => setMyResources(res.data))
        axios.get(url + 'get-all-public-resources', {
            headers: {
                Authorization: "Bearer " + token
            }
        }).then((res) => {setPublicResources(res.data);setLoading(false)})
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const [resource, setResource] = useState({
        category: "",
        des: "",
        link: "",
        review: "",
        rating: ""
    })
    const { category, des, link, review, rating } = resource
    function onChange(e) {
        setResource({ ...resource, [e.target.name]: e.target.value })
    }
    function handleSubmit(e) {
        e.preventDefault()
        axios.post(url + 'add-public-resource', {
            category: category, des: des, link: link, review: review, rating: rating
        }, {
            headers: {
                Authorization: "Bearer " + token
            }
        }).then((res) => setMyResources([...myResources, res.data]))
        setResource({})
        setModal(false)
    }
    if(loading){
        return <Loading/>
    }
    return (
        <React.Fragment>
            <PageHero title="Resources" />
            <Wrapper className="section-center">
                <div className="resources ">
                    <h2>Public Resources</h2>
                    
                        {
                            publicResources.map((res) => {
                                return (
                                    <div key={res.publicResourceId} className="resource">
                                        <h3>{res.category}</h3>
                                        <p>{res.des}</p>
                                        <p><Link to={res.link}>{res.link}</Link></p>
                                        <p>Review : {res.review}</p>
                                        <p>Rating : {res.rating}/5</p>
                                    </div>
                                )
                            })
                        }

                </div>
                <div className="right">
                    <button className="btn add-review" onClick={() => setModal(!modal)}>Add Resource <IoMdAddCircle /></button>
                    {modal && <form className="resource-form" onSubmit={handleSubmit}>
                        <div className="form-control">
                            <input type="text" name="category" value={category} onChange={onChange} placeholder="Resource name"></input>
                        </div>
                        <div className="form-control">
                            <input type="text" name="des" value={des} onChange={onChange} placeholder="Description"></input>
                        </div>
                        <div className="form-control">
                            <input type="text" name="link" value={link} onChange={onChange} placeholder="Resource link"></input>
                        </div>
                        <div className="form-control">
                            <input type="text" name="review" value={review} onChange={onChange} placeholder="Comment"></input>
                        </div>
                        <div className="form-control">
                            <label>Rating:</label>
                            <select name="rating" value={rating} onChange={onChange} >
                                <option value="1" selected>1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                        <div className="btn-group">
                            <button type="submit" className="btn">SAVE</button>
                            <button type="button" onClick={() => setModal(false)} className="btn">CANCEL</button>
                        </div>

                    </form>}
                    <div className="resources">
                        <h2>Resources Added By Me</h2>
                        {
                            myResources.map((res) => {
                                return (
                                    <div key={res.publicResourceId} className="resource">
                                        <h3>{res.category}</h3>
                                        <p>{res.des}</p>
                                        <p><Link to={res.link}>{res.link}</Link></p>
                                        <p>Review : {res.review}</p>
                                        <p>Rating : {res.rating}/5</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </Wrapper>
        </React.Fragment>

    )
}

const Wrapper = styled.div`
    min-height:78vh;
    display:grid;
    grid-template-columns:1fr;
    margin-top:30px;
    row-gap:30px;
    width:60vw;
    .resources{
            padding:0;
            h2{
                color:rgb(26, 26, 45);
                letter-spacing:1px;
                text-align:center;
                padding:5px 0;
                border-bottom:4px solid rgb(176, 146, 146);
                border-top:4px solid rgb(176, 146, 146);
            }
            .resource{
                h3{
                    margin:0;
                    color:rgb(26, 26, 45);
                    letter-spacing:1px;
                    margin-bottom:5px;
                }
                p{
                    margin:0;
                    font-weight:500;
                    letter-spacing:1px;
                    margin-bottom:5px;
                    font-size:15px;
                }
                a{
                    margin-bottom:5px;
                }
                background-color:rgb(238, 200, 186);
                padding:10px;
                border-radius:5px;
                margin-bottom:20px;
            }
    }
    .right{
        .add-review{
            width:100%;
            justify-content:center;
            margin-top:15px;
            svg{
                margin-left:10px;
            }
        }
        .resource-form{
            width:300px;
            border:2px solid rgb(194, 158, 158);
            border-radius:5px;
            padding:10px;
            margin:0 auto;
            margin-top:20px;
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
            input{
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
            input::placeholder{
                letter-spacing:1px;
                font-weight:bold;
            }
            input:focus::placeholder{
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
    @media screen and (min-width:992px){
        grid-template-columns:1fr 1fr;
        column-gap:50px;
        align-items:start;
        width:90vw;
    }
`