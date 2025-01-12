import React from "react";


export default function Meaning(props){
    console.log(props.meaning);
    return (
        <div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function (definitions, index){
            return(
                <div key={index}>
              <p>
            {definitions.definition}
            <br />
            <em>
            {definitions.example} </em>
            </p> 
         </div>       
            );
            
        })}
           
        </div>
    );

}