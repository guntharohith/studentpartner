import React, {useState, useEffect} from 'react'
import styled from "styled-components";
import PageHero from "../Components/PageHero";
import axios from 'axios'
import Loading from '../Components/Loading'
import { url } from '../utils/constants'
const token = localStorage.getItem("token")
export default function Notes(){
    const [notes,setNotes] = useState([])
    const [loading, setLoading] = useState(false)
    const [modal, setModal] = useState(false)
    const [noteName,setNoteName] = useState("")
    const [noteDes,setNoteDes] = useState("")
    useEffect(()=>{
        setLoading(true)
        axios.get(url+"get-notes",{
            headers:{
                Authorization:"Bearer " + token
            }
        }).then((res) => {setNotes(res.data);setLoading(false)})
    },[])
    function handleNote(e) {
        e.preventDefault()
        setLoading(true)
        axios.post(url + "add-note", {
            noteName: noteName,
            noteDes: noteDes
        }, {
            headers: {
                Authorization: "Bearer " + token
            }
        }).then((res) => {setNotes(...notes,res.data);setLoading(false)})
        setNoteDes("")
        setNoteName("")
        setModal(false)
    }
    if(loading){
        return <Loading/>
    }
    return(
        <React.Fragment>
            <PageHero title="Notes"/>
            <Wrapper className="section-center">
                <h2>NOTES</h2>
                <button className="btn add-notes" onClick={() => setModal(!modal)}>Add Notes</button>
                {modal &&
                    <form onSubmit={handleNote}>
                        <div className="form-control">
                            <input type="text" name="notes" value={noteName} onChange={(e) => setNoteName(e.target.value)} placeholder="Notes name"></input>
                        </div>
                        <div className="form-control">
                            <textarea rows={10} type="text" name="notes" value={noteDes} onChange={(e) => setNoteDes(e.target.value)} placeholder="Notes Description"></textarea>
                        </div>
                        <div className="btn-group">
                            <button type="submit" className="btn">SAVE</button>
                            <button type="button" className="btn" onClick={() => setModal(false)}>CLOSE</button>
                        </div>
                    </form>
                }
                {
                    notes.map((note) => {
                        return (
                            <div key={note.noteId} className="note">
                                <h3>{note.noteName}</h3>
                                <p>{note.noteDes}</p>
                            </div>
                        )
                    })
                }
            </Wrapper>
        </React.Fragment>

    )
}

const Wrapper = styled.div`
    min-height:65vh;
    width:90vw;
    .add-notes{
        font-size:15px;
    }
    form{
        width:300px;
        border:2px solid rgb(194, 158, 158);
        border-radius:5px;
        padding:10px;
        margin-top:20px;
        margin-bottom:20px;
        .form-control{
            margin-bottom:10px;
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
        input::placeholder{
            letter-spacing:1px;
            font-weight:bold;
        }
        input:focus::placeholder{
            color:black;
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
    h2{
        color:rgb(26, 26, 45);
        letter-spacing:1px;
        text-align:center;
        padding:5px 0;
        border-bottom:4px solid rgb(176, 146, 146);
        border-top:4px solid rgb(176, 146, 146);
    }
    .note{
        display:grid;
        grid-template-columns:200px 1fr;
        align-items:center;
        background-color:rgb(238, 200, 186);
        border-radius:5px;
        padding:10px;
        margin-bottom:20px;
        border-left:10px solid rgb(176, 146, 146);
        h3{
            margin:0;
            color:white;
            letter-spacing:1px;
            padding:3px 0;
            background-color:rgb(176, 146, 146);
            border-radius:5px;
            text-align:center;
            margin-right:15px;
        }
        p{
            margin:0;
            font-weight:500;
            letter-spacing:1px;
            font-size:15px;
            padding:5px;
            color:rgb(26, 26, 45);
        }
    }
    @media screen and (min-width:992px){
        width:60vw;
    }
`