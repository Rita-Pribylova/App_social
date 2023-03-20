import React from "react";
import preloader from "../../assets/images/loading.svg"

let Preloader: React.FC = (props) => {
   return <div>
        <img src={preloader} alt="load"></img> 
    </div>

}

export default Preloader;