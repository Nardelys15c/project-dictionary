import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import './Dictionary.css';

export default function Dictionary(props){
    let [keyword, setKeyword]=useState(props.defaultKeyword);
    let [results, setResults]= useState(null);
    let [loaded, setLoaded]=useState(false);
    let [photos, setPhotos]=useState(null);

function handleDictionaryResponse(response){
        setResults(response.data[0]);
}
function handlePexelsResponse(response){
    setPhotos(response.data.photos);
}

function search (){
    let apiUrl= `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);


    let pexelsApiKey= "7bf4e319208b1e35aafo3ce425b6c3at";
    let pexelsApiUrl=`https://api.shecodes.io/images/v1/search?query=${keyword}&key=7bf4e319208b1e35aafo3ce425b6c3at`
    axios.get(pexelsApiUrl, { headers: {"Authorization" : `Bearer ${pexelsApiKey}`}}).then(handlePexelsResponse);

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
        <Photos photos={photos}/>
      </div>   
      );
    }  else{
        load();
        return "Loading";   
    } 
}