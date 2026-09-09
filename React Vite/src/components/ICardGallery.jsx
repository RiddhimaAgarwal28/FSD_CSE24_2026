import React from 'react'
import ICard from './ICard'

function ICardGallery() {
    const student=[{
        college:'ABES Engineering College',
        pic:'https://tse4.mm.bing.net/th/id/OIP.PtU3oZdtcX1QysiofE2zOQHaE8?r=0&pid=Api&h=220&P=0',
        roll:'20909',
        name:'Riddhima Agarwal',
        branch:'CSE'
    },
    {
        college:'ABES Engineering College',
        pic:'https://tse4.mm.bing.net/th/id/OIP.PtU3oZdtcX1QysiofE2zOQHaE8?r=0&pid=Api&h=220&P=0',
        roll:'20909',
        name:'Riddhima Agarwal',
        branch:'CSE'
    },
    {
        college:'ABES Engineering College',
        pic:'https://tse4.mm.bing.net/th/id/OIP.PtU3oZdtcX1QysiofE2zOQHaE8?r=0&pid=Api&h=220&P=0',
        roll:'20909',
        name:'Riddhima Agarwal',
        branch:'CSE'
    }]
  return (
    <div>
        {/*<ICard college="ABES Engineering College" pic="https://tse4.mm.bing.net/th/id/OIP.PtU3oZdtcX1QysiofE2zOQHaE8?r=0&pid=Api&h=220&P=0" roll="2400320100897" name="Riddhima Agarwal" branch="CSE"/>
        <ICard college="ABES Engineering College" pic="https://tse4.mm.bing.net/th/id/OIP.PtU3oZdtcX1QysiofE2zOQHaE8?r=0&pid=Api&h=220&P=0" roll="2400320100897" name="Riddhima Agarwal" branch="CSE"/>
        <ICard college="ABES Engineering College" pic="https://tse4.mm.bing.net/th/id/OIP.PtU3oZdtcX1QysiofE2zOQHaE8?r=0&pid=Api&h=220&P=0" roll="2400320100897" name="Riddhima Agarwal" branch="CSE"/>
        <ICard college="ABES Engineering College" pic="https://tse4.mm.bing.net/th/id/OIP.PtU3oZdtcX1QysiofE2zOQHaE8?r=0&pid=Api&h=220&P=0" roll="2400320100897" name="Riddhima Agarwal" branch="CSE"/>*/}
        {/*<ICard data={student[0]}/>
        <ICard data={student[1]}/>
        <ICard data={student[2]}/>*/}
        {
            student.map((ele)=>(
                <ICard data={ele}/>
            ))
        }
    </div>
  )
}

export default ICardGallery