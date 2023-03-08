import React from "react";
import "../Style/Card.css"
const FrontCard = (props) => {
return(
      <div class={"card-front " + props.color}>
        {props.front}
      </div>
    )
}
export default FrontCard