import React from "react";
import Synonyms from "./Synonyms";


export default function Meaning(props){
    
    return (
        <div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function (definitions, index){
            return(
                <div key={index}>
              <p>
                <strong>Definition:</strong>
            {definitions.definition}
            <br />
            Example:
            <em>
            {definitions.example} </em>
            <Synonyms synonyms={definitions.synonyms}/>
            
            </p> 
         </div>       
            );
            
        })}
           
        </div>
    );

}