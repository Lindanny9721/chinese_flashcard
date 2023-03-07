import React from "react";
import "../Style/Card.css"
const BackCard = (props) => {
return(
      <div class="flip-card-back">
        {props.back}
      </div>
    )
}
export default BackCard