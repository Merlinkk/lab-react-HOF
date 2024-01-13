import React, { Component } from "react";

class HigherOrderComponent extends Component {
  constructor() {
    super();
    this.state = {
      userData: [
        { id: "1", name: "Joe", user_type: "Developer", age: 31, years: 11 },
        { id: "2", name: "Hill", user_type: "Designer", age: 26, years: 4 },
        { id: "3", name: "John", user_type: "Teacher", age: 24, years: 2 },
        { id: "4", name: "Sam", user_type: "Entreprenuer", age: 58, years: 25 },
        { id: "5", name: "Jack", user_type: "Designer", age: 43, years: 18 },
      ],
    };
  }
  // display all items
  renderItems = () => {
    let data = this.state.userData;
    let mapRows = data.map((item) => (
      <React.Fragment key={item.id}>
        <li className="list-elements">
          {/* Passing unique value to 'key' prop, eases process for virtual DOM to remove specific element and update HTML tree  */}
          <span>Id: {item.id} | </span>
          <span>Name : {item.name} | </span>
          <span>User Type: {item.user_type}</span>
        </li>
      </React.Fragment>
    ));
    return mapRows;
  };

  renderByUserType = () => {
    let data = this.state.userData;
    let filteredData = data.filter((item) => item.user_type === "Designer");
    let mapRows = filteredData.map((item) => (
      <React.Fragment key={item.id}>
        <li className="list-elements">
          {/* Passing unique value to 'key' prop, eases process for virtual DOM to remove specific element and update HTML tree  */}
          <span>Id: {item.id} | </span>
          <span>Name : {item.name} | </span>
          <span>User Type: {item.user_type}</span>
        </li>
      </React.Fragment>
    ));
    return mapRows;
  };

  renderByLetterFilter = () => {
    let data = this.state.userData;
    let filteredData = data.filter((item) => item.name[0] == "J");
    let mapRows = filteredData.map((item) => (
      <React.Fragment key={item.id}>
        <li className="list-elements">
          {/* Passing unique value to 'key' prop, eases process for virtual DOM to remove specific element and update HTML tree  */}
          <span>Id: {item.id} | </span>
          <span>Name : {item.name} | </span>
          <span>User Type: {item.user_type}</span>
        </li>
      </React.Fragment>
    ));
    return mapRows;
  };

  renderByAge = () => {
    let data = this.state.userData;
    let filteredData = data.filter((item) => item.age > 28 && item.age <= 50);
    let mapRows = filteredData.map((item) => (
      <React.Fragment key={item.id}>
        <li className="list-elements">
          {/* Passing unique value to 'key' prop, eases process for virtual DOM to remove specific element and update HTML tree  */}
          <span>Id: {item.id} | </span>
          <span>Name : {item.name} | </span>
          <span>User Type: {item.user_type}</span>
        </li>
      </React.Fragment>
    ));
    return mapRows;
  };

  renderExperience = () => {
    let data = this.state.userData;
    let filteredData = data.filter((item) => item.user_type === "Designer");
    let reduceData = filteredData.reduce(
      (accumulator, item) => accumulator + item.years,
      0
    );
    return reduceData;
  };

  render() {
    return (
      // instead of a parent div tag we can also use React.Fragment
      <React.Fragment>
        <h1>Display all items</h1>
        <div className="display-box">
          <ul>{this.renderItems()} </ul>
        </div>

        <br />

        <h1>Display items by user type</h1>
        <div className="display-box">
          <ul>{this.renderByUserType()} </ul>
        </div>

        <br />

        <h1>Filter Users starting with letter 'J'</h1>
        <div className="display-box">
          <ul>{this.renderByLetterFilter()} </ul>
        </div>

        <br />

        <h1>Filter users based on age</h1>
        <div className="display-box">
          <ul>{this.renderByAge()} </ul>
        </div>

        <br />

        <h1>Total Experience of Designers</h1>
        <div className="display-box">
          <h1>{this.renderExperience()} </h1>
        </div>
      </React.Fragment>
    );
  }
}

export default HigherOrderComponent;
