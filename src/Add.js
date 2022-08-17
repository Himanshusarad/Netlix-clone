// import React from "react";

import { useEffect, useState } from "react";

import axios from "axios";
import './Add.css';
function Add(){
    const [add,setAdd] = useState("");

    useEffect(() =>{
        async function fetchData(){
            const images = await axios.get(' https://api.imgflip.com/get_memes');
            console.log(images);
            setAdd(images.data);
            return images;
        }
        fetchData();
    },[]);
    // console.table(add);
    // console.log(add.data.memes[0].url);

    return(
            <div className="add_banner">
                <img className="add_image" src={`${add.data.memes[10].url}`} alt="Meme"/>
            </div>
    );
}

export default Add;