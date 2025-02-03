import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";


export default function Meaning(props){
    
    return (
        <div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function (definitions, index){
            return(
                <div key={index}>
            <div className="definition">
            {definitions.definition} </div>
            <br />
            <div className="example">
            {definitions.example} </div>
            <Synonyms synonyms={definitions.synonyms}/>
                      
         </div>       
            );
            
        })}
           
        </div>
    );

}