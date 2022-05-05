import React,{useContext, useEffect, useState,useRef} from 'react'
import Categories from './Categories'
import Interest from './Interest'
import Message from './Message'
import UserMessage from './UserMessage'
import { StepsContext } from "../Context/StepsContext";
import ReactScrollableFeed from 'react-scrollable-feed'


export default function Body(props) {
    
    const {steps,items,messagesEndRef } = useContext(StepsContext);
    const [components, setcomponents] = items
    const [chatbotsteps, setchatbotsteps] = steps
    const endref=messagesEndRef
    /*async function loopsteps(i){
        await new Promise(r => setTimeout(r, 1000));
        if(chatbotsteps[i].user == true){
            return;
        }
        if(chatbotsteps[i].message !== null){
            setcomponents(oldArray => [...oldArray, <Message message= {chatbotsteps[i].message }/>]);
        }

        loopsteps(chatbotsteps[i].trigger-1)
    }
    */
    
    
    useEffect(()=>{
        props.loopsteps(1);
    },[])

    useEffect(()=>{
        endref.current?.scrollIntoView({ behavior: "smooth" })
        //console.log(document.documentElement.clientWidth)
        //console.log(document.documentElement.clientWidth)
    },[components])

  return (
    <div className="body">
        {/*
        
        <Message message={"Good day!"}/>
        <Message message={"Welcome to MontyMobile,a leading VAS telecom solutions provider and an international SMS wholesale intermediary hub. MontyMobile includes a wide range of Fintech,Data Monetixation,loT and Mobile Advertising solutions."}/>
        <Message message={"Please enter your name"}/>
        <UserMessage message={"hadi"}/>
        <Message message={"Hello Hadi"}/>
        <Message message={"Choose your favorite interests "}/>
        <Categories/>
        <Interest opt ={[
                  {
                    value: "Cloud Gaming",
                    label: "Cloud Gaming",
                    trigger: "18",
                  },
                  {
                    value: "Monty Studios",
                    label: "Monty Studios",
                    trigger: "18",
                  },
                  {
                    value: "Gaming Portal",
                    label: "Gaming Portal",
                    trigger: "18",
                  },
                ]}/>
            */}
            {components}
            <div ref={endref} style={{height:"5%"}}/>




            



    </div>
  )
}
