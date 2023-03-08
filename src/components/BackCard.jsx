import React from "react";
import "../Style/Card.css"
const BackCard = (props) => {
return(
      <div class={"card-back " + props.color}>
        {props.back}
      <img src={props.image}></img>
      </div>
    )
}
export default BackCard