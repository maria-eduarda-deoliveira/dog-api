import React, { useState } from "react";
import EnterImg from "../assets/entrada.gif";
import Dog from "../assets/Dog.svg";
import axios from "axios";
import "./main.css";

export default function Main() {
    const [dog, setDog] = useState(EnterImg)

    const API = async() => {
        let response = await axios.get(`https://dog.ceo/api/breeds/image/random`)
        return response.data.message
    }

    const Image = async () => {
        let APIResponse = await API()
        setDog(APIResponse)
    }

    const mainReturn = () => {
        return (
            <div className="container">
                <div className="title-container">
                    <h1>DOG API<img className="image-logo" src={Dog} alt="Dog Icon" /></h1>
                    <h4>Seu site contra o estresse!</h4>
                </div>
                <div>
                <div className="box-dogs">
                    <img className="Dogs-Img" src={dog} alt="Dogs"/>
                    </div>
                    <button className="bttn" onClick={() => {Image();}}>Click!</button>
                </div>
            </div>
        )
    }

    return (
        <>
            {mainReturn()}
        </>
    );
}
