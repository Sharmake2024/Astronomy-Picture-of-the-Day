import React , { useEffect, useState }from "react";
import "./App.css";
import axios from "axios";
import AstronomyPicture from "./Conponent/AstronomyPicture";

function App() {
  const [images, setImages] = useState([])

  const apiKey = "goYe1JFO4qrwYmBiHPthiFm2qbqWFLMsy02H8her";
  const Full_api = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
 

  useEffect( ()=> {
    
    axios.get(Full_api).then((response)=>{
      console.log(response.data);
        setImages(response.data);
    } )
    .catch( (error)=> {
      console.log(error)
    })

  },[]);


        console.log("useState data from api", images);

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>


           <AstronomyPicture items = {images} />

  
       
       
      
    </div>
  );
}

export default App;
