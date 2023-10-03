import React from "react";
import "./App.css";
import Tooltip from "./Tooltip";

class App extends React.Component {
  //constructor for state creation
  constructor() {
    super();
    this.state = {
      position: "top",
      hovering: false,
    };
  }

  // handle click
  handleClick = (pos) => {
    this.setState({
      position: pos,
    });
  };

  //  handleMouse Entering event
  handleMouseEnter = () => {
    this.setState({
      hovering: true,
    });
  };

  // Handling Mouse Leate element
  handleMouseLeave = () => {
    this.setState({
      hovering: false,
    });
  };

  render() {
    return (
      <div className="App">
        <h1 className="codingNinja">Coding Ninja Tooltip Project</h1>
        <div className="btn-position">
          <div className="grp-name">
            <h3>Chose a button to sellect position</h3>{" "}
          </div>
          <div className="topFirst">
            <button
              className={this.state.position === "top" ? "btn active" : "btn"}
              onClick={(e) => {
                this.handleClick("top");
              }}
            >
              TOP
            </button>
          </div>
          <div className="leftFounth">
            <button
              className={this.state.position === "left" ? "btn active" : "btn"}
              onClick={(e) => {
                this.handleClick("left");
              }}
            >
              LEFT
            </button>
          </div>
          <div className="rightSecond">
            <button
              className={this.state.position === "right" ? "btn active" : "btn"}
              onClick={(e) => {
                this.handleClick("right");
              }}
            >
              RIGHT
            </button>
          </div>
          <div className="downFourth">
            <button
              className={this.state.position === "down" ? "btn active" : "btn"}
              onClick={(e) => {
                this.handleClick("down");
              }}
            >
              DOWN
            </button>
          </div>
        </div>
        {
          // button Hovering
        }
        <div id="button-container">
          <button
            className="btn hover-btn"
            onMouseOver={this.handleMouseEnter}
            onMouseOut={this.handleMouseLeave}
          >
            Hover Over Me!!
          </button>
          {this.state.hovering && <Tooltip position={this.state.position} />}
        </div>
      </div>
    );
  }
}

export default App;
