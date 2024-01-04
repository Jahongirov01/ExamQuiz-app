import { useRef, useState } from "react"


export  const data=[
  {
      question:"<br/> nma",
      option1:"quyosh",
      option2:"osmon",
      option3:"suv",
      option4:"code",
      answers:4
  },
  {
      question:"input ichiga nma yozsangiz boladi ",
      option1:"oyin",
      option2:"bosh",
      option3:"text",
      option4:"qol",
      answers:3
  },
  {
      question:"<h1/> nma",
      option1:"har hil turdagi textlar",
      option2:"osmon",
      option3:"quyosh",
      option4:"stol",
      answers:1
  },
  {
      question:" <hr/> nma",
      option1:"osmon",
      option2:"buut",
      option3:"chizish",
      option4:"shokolad",
      answers:3
  },
  {
      question:"<p/>",
      option1:"text yozish uchun",
      option2:"rasm chizish uchun",
      option3:"bulutlar yodlash",
      option4:"hamma javob tori", 
      answers:1
  },
]
const Test = () => {
       
    const [index, setIndex]=useState(0)
    const [question,Seetquestion]=useState(data[index])
    const [can,Seetcan]=useState(false)
    const [score,Setscore]=useState(0)
    const [result,Setresult]=useState(false)
    let Option1=useRef(null)
    let Option2=useRef(null)
    let Option3=useRef(null)
    let Option4=useRef(null)
    let otion_Aray=[Option1,Option2,Option3,Option4];


const Question=(e,answers)=>{
    if(can===false)
    if(question.answers===answers){
        e.target.classList.add("corect")
     
        Seetcan(true)
        Setscore(prev=>prev+1)
    }else{
        e.target.classList.add("incorect")
       
        Seetcan(true)
        otion_Aray[question.answers-1].current.classList.add("corect")
    }
}

const next = () =>{
if(can===true){
    if(index===data.length -1){
Setresult(true)
return 0
    }
setIndex(index+1)
Seetquestion(data[index]);
Seetcan(false)
otion_Aray.map((option)=>{
    option.current.classList.remove("corect")
    option.current.classList.remove("incorect")
    return null
})}
}
const playagain=()=>{
    setIndex(0)
    Seetquestion(data[0])
    Setscore(0)
    Seetcan(false)
    Setresult(false)
}
const handleDark=()=>{
  let darkEl=document.getElementById('container')
  darkEl.classList.toggle('dark-mode');}
return (
<div className="container">
<div className='container' id='container'>
<div className="div">
      
         <img src="./images/vector (1).png" alt="" className='img' />
         <img src="./images/Vector.svg" alt="" className='im' />
         <button className='btn' onClick={handleDark}>
         </button>
               <button className='btn3'>
                   </button>
                   <div className="card">
                   <img src="./images/card-1.svg" alt="card" className="i" />
             <h1 className="html1" >HTML</h1>
                   </div>
                   <div className="section1">
                    <p className='titil'>Question {index + 1} of {data.length}</p>
       <h1 className='subtitil' id="question">{question.question}</h1>
            <button className="Card5"  ref={Option1}  onClick={(e)=>{Question(e,1)}}><span className="words" >A</span>{question.option1}</button>
            <button className="Card6"  ref={Option2} onClick={(e)=>{Question(e,2)}}> <span className="words"  >B</span>{question.option2}</button>
            <button className="Card7"  ref={Option3} onClick={(e)=>{Question(e,3)}}> <span className="words" >C</span>{question.option3}</button>
            <button className="Card8"  ref={Option4} onClick={(e)=>{Question(e,4)}}> <span className="words" >D</span>{question.option4},</button>
                  
{result?<></>:<>
                    <button className="btn19" onClick={next} >Submit Answer</button>
                    </>}
                    {result?<>
                    <div className="container10">
                    <img src="./images/card-1.svg" alt="card" className="i" />
             <h1 className="html1" >HTML</h1>
                        <h1 className="number">{score} </h1>
                    <h2 className="h2"> out of {data.length}</h2>
                    <button className="button"  onClick={playagain}>Play Again</button></div>

                        </>:<></>}
        
                    
   </div>
   </div>
   </div>
</div>
               
)

}



export default Test