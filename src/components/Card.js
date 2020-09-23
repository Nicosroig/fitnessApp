import React, { Component } from "react";
import excerciseImg from "../images/exercise.png";
import "./css/Card.css";

class Card extends Component {
  render() {
    return (
      <div className="card mx-auto Fitness-Card">
        <div className="card-body">
          <div className="row center">
            <div className="col-6">
              <img
                src={excerciseImg}
                alt="Guy doing exercise"
                className="float-right"
              />
            </div>
            <div className="col-6 Fitness-Card-Info">
              <h1>Technique Guides</h1>
              <p>Learn amazing street workout and calisthenics</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
