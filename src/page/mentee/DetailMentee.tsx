import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import MenteeTable from "../../components/MenteeTable";

interface TypeMentee{
    id: number;
}

const DetailMentee = () =>{
    const navigate = useNavigate();
    const { id } = useParams();
    const [cookie] = useCookies(["token", "id"]);
    const checkToken = cookie.token;
    const checkId = cookie.id;
    const [menteeId, setMenteeId] = useState<string>("");

    useEffect(()=>{
        fetchData();
    }, [])

    const fetchData = async () => {
        await axios
            .get(`mentees/${id}`, {
                headers: { Authorization: `Bearer ${cookie.token}`, Accept: `application/json`, 'Content-Type': 'application/json'},
            })
            .then((res) =>{
                setMenteeId(res.data.data.mentee.menteeId);
            })
            .catch((err)=>{ 
                alert(err());
            });
        
    }
    
    return(
        <Layout>
            <Navbar/>
        </Layout>
    )
}

export default DetailMentee;