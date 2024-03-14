import React from "react";

function AstronomyPicture(props) {
    console.log( " Astron func data", props);
    const {title, date, url} = props.items
  
    return(
        <div className="container">

        <section>
            <img src= {url}></img>
            <h1>  {title} </h1>
            <p> {date}</p>
            {/* <p>{explanation}</p> */}
        </section>
     

      {/* {img.map( (item)=> {
            console.log(item)
      })}
         */}

        {/* <section>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkLH1_IIMks9ZgtymlM2LL1jdlT_z3AY0i7g&usqp=CAU"></img>
            <h1>Hello World !</h1>
            <p>dfkjdskfjdskf sdfjdkjfjdfdkfjd dfjdkfjdskfjsjdfkdjf</p>
        </section> */}

        </div>
    );
}

export default AstronomyPicture;