import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import './Dictionary.css';

export default function Dictionary(props){
    let [keyword, setKeyword]=useState(props.defaultKeyword);
    let [results, setResults]= useState(null);
    let [loaded, setLoaded]=useState(false);

function handleResponse(response){
        setResults(response.data[0]);
}
function search (){
    let apiUrl= `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
}
    
function handleSubmit(event){
   event.preventDefault();
   search();

}

function handleKeywordChange(event){
    setKeyword(event.target.value);
}
function load(){
    setLoaded(true);
    search();
}
if (loaded){
    return ( <div className="Dictionary">
        <section>
            <h1>
                What are you looking for?
            </h1>
        <form onSubmit={handleSubmit}>
        <input type="Search" onChange={handleKeywordChange} autoFocus={true}  defaultValue={props.defaultKeyword}/>
        </form>
        <div className="hint">Suggested words: Sunrise, Books, Cardio, Beer...
        </div>
        </section>
        <Results results={results} />
      </div>   
      );
    }  else{
        load();
        return "Loading";   
    } 
}