import React from "react";
import "../Style/Card.css"
const FrontCard = (props) => {
return(
      <div class="flip-card-front">
        {props.front}
      </div>
    )
}
export default FrontCard