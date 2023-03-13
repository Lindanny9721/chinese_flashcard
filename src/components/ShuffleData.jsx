import React from "react";
import { useState } from "react";
import FrontCard from "./FrontCard";
import BackCard from "./BackCard";
import "../Style/Card.css"
const ShuffleData = () => {
    const [num, setNum] = useState(0);
    const [flip, setFlip] = useState(false);
    const [userAnswer, setUserAnswer] = useState('');
    const [numOfCorrect, setCorrectAnswer] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [color, setColor] = useState('');
    const [data, setData] = useState([
        {
            "front": "麦当劳",
            "back": "McDonald's (mài dāng láo)",
            "difficulty": "medium",
            "image": "https://tse2.mm.bing.net/th?id=OIP.0fZcGooulF9eDyMfZ-ldpAHaE6&pid=Api"
        },
        {
            "front": "汉堡包",
            "back": "hamburger (hàn bǎo bāo)",
            "difficulty": "medium",
            "image": "https://tse4.mm.bing.net/th?id=OIP.AdNfTlrg5uh2cwatBPhvywHaE8&pid=Api"
        },
        {
            "front": "炸",
            "back": "to fry (zhá)",
            "difficulty": "easy",
            "image": "https://tse2.mm.bing.net/th?id=OIP.zHJ9nlT5WqkV-fRRDKxggAHaE7&pid=Api"
        }, 
        {
            "front": "可口可乐",
            "back": "Coca cola (kěkǒukělè)",
            "difficulty": "hard",
            "image": "https://tse1.mm.bing.net/th?id=OIP.wN9vH342re1u9ahAMLE5IQHaE8&pid=Api"
        },
        {
            "front": "薯条",
            "back": "French fries (shǔtiáo)",
            "difficulty": "easy",
            "image": "https://tse4.mm.bing.net/th?id=OIP.bjwIfbyk1X9FvFq6IMgHAAHaFj&pid=Api"
        },
        {
            "front": "花钱",
            "back": "to spend money (huā qián)",
            "difficulty": "easy",
            "image": "https://tse4.mm.bing.net/th?id=OIP.9zArPbz619_ae6o3rEOV9wHaE8&pid=Api"
        },
        {
            "front": "大众化",
            "back": "popular (dà zhòng huà)",
            "difficulty": "medium",
            "image": "https://tse3.mm.bing.net/th?id=OIP.PKYMmmvhWRw521nTF5BJFQHaFN&pid=Api"
        },
        {
            "front": "快餐",
            "back": "fast-food (kuài cān)",
            "difficulty": "easy",
            "image": "https://tse1.mm.bing.net/th?id=OIP.RIS_6IbCLYv1X3bzYW1lmAHaFH&pid=Api"
        },
        {
            "front": "店",
            "back": "store (diàn)",
            "difficulty": "easy",
            "image": "https://tse4.mm.bing.net/th?id=OIP.k3kIPoqo0-wmp_nPPU7ujAHaE8&pid=Api"
        },
        {
            "front": "高级",
            "back": "high class, first rate (gāojí)",
            "difficulty": "easy",
            "image": "https://tse3.mm.bing.net/th?id=OIP.yLvn-tohZNKeSXgSZ9cDkwHaE6&pid=Api"
        }
    ])
    const nextCard = () => {
        if(num == data.length - 1)
        {
            setNum(num + 1);
            setNum(0);
            setFlip(false);
            setUserAnswer("");
            setColor('');
        }
        else
        {
            setNum(num + 1);
            setFlip(false);
            setUserAnswer("");
            setColor('');
        }
    }
    const prevCard = () => {
        if(num == 0)
        {
            setNum(num - 1);
            setNum(data.length - 1);
            setFlip(false);
            setUserAnswer("");
            setColor('');
        }
        else {
            setNum(num - 1);
            setFlip(false);
            setUserAnswer("");
            setColor('');
        }
    }
    const Shuffle = (array) => {
        let index = array.length,  randomIndex;
        while (index != 0) {
            randomIndex = Math.floor(Math.random() * index);
            index--;
            [array[index], array[randomIndex]] = [array[randomIndex], array[index]];
        }
        setData(array);
    }
    const handleClick = () => {
        if(!flip)
            setFlip(true);
        else
            setFlip(false);
    }
    const handleChange = (e) => {
        setUserAnswer(e.target.value);
    }
    const checkAnswer = (e) => {
        e.preventDefault();
        if(data[num].back != userAnswer){
            if(highScore < numOfCorrect)
                setHighScore(numOfCorrect);
            setCorrectAnswer(0);
            setColor('red');
        } 
        else {
            setCorrectAnswer(numOfCorrect + 1);
            setColor('green');
        }
    }
    const removeCard = (array) => {
        const index = data.indexOf(array);
        if (index > -1)
        {
            data.splice(index, 1);
        }
    } 
return(
    <div className = "container">
        <div>
            <h3>Number of Cards: {data.length}</h3>
            <h3>Current Streak: {numOfCorrect} Longest Streak: {highScore}</h3>
        </div>
        <div onClick = {handleClick} className={flip ? "card" : "flip-card"}>
            <div  className="card-inner">
                <FrontCard front = {data[num].front} color = {data[num].difficulty}/>
                <BackCard back = {data[num].back} color = {data[num].difficulty} image = {data[num].image}/>
            </div>
        </div>
        <form>
            <label for ="answer"> Answer: </label>
            <input className = {color} type="text" name = "answer" value={userAnswer} onChange = {handleChange}></input>
            <button disabled = {flip} onClick={checkAnswer}>Submit</button>
        </form>
        <div>
            <button onClick={prevCard}>⭠</button>
            <button onClick={nextCard}>⭢</button>
            <button onClick={() => Shuffle(data)}>Shuffle</button>
            <button onClick={() => removeCard(data[num])}>Remove</button>
        </div>
    </div>
    )
}
export default ShuffleData