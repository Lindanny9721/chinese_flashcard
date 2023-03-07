import React from "react";
import { useState } from "react";
import FrontCard from "./FrontCard";
import BackCard from "./BackCard";
import "../Style/Card.css"
const ShuffleData = () => {
    const [num, setNum] = useState(0);
    let data = [
        {
            "front": "麦当劳",
            "back": "McDonald's (mài dāng láo)",
            "difficulty": "medium"
        },
        {
            "front": "汉堡包",
            "back": "hamburger (hàn bǎo bāo)",
            "difficulty": "medium"
        },
        {
            "front": "炸",
            "back": "to fry (zhá)",
            "difficulty": "easy"
        }, 
        {
            "front": "可口可乐",
            "back": "Coca cola (kěkǒukělè)",
            "difficulty": "hard"
        },
        {
            "front": "薯条",
            "back": "French fries (shǔtiáo)",
            "difficulty": "easy"
        },
        {
            "front": "花钱",
            "back": "to spend money (huā qián)",
            "difficulty": "easy"
        },
        {
            "front": "大众化",
            "back": "popular (dà zhòng huà)",
            "difficulty": "medium"
        },
        {
            "front": "快餐",
            "back": "fast-food (kuài cān)",
            "difficulty": "easy"
        },
        {
            "front": "店",
            "back": "store (diàn)",
            "difficulty": "easy"
        },
        {
            "front": "高级",
            "back": "high class, first rate (gāojí)",
            "difficulty": "easy"
        },
    ]
    const addOne = () => {
        setNum(num + 1);
    }
return(
    <div class="flip-card">
        <div class="flip-card-inner">
            <FrontCard front = {data[num].front}/>
            <BackCard back = {data[num].back}/>
            <button onClick={addOne}>⭢</button>
        </div>
    </div>
    )
}
export default ShuffleData