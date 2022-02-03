import React from "react"
import PropTypes from "prop-types";
import './App.css';
import cars from "./cars.json";

const CarsRow=( {cars})=>(
  <tr key={cars.ID}>
          <td>{cars.Manufacturer}</td>
          <td>{cars.Model}</td>
        </tr>
)

CarsRow.propTypes = {
  cars: PropTypes.shape({
    Manufacturer: PropTypes.string,
     Model: PropTypes.string
  }),
 
};

function App() {
  const [filter, filterSet] = React.useState("");
  return (
    <div
    style={{ 
      margin: "auto",
      width:800,
      paddingTop: "1rem",
     }}
    >
      <h1 className="title"> Halftime Rental Search</h1>
      <input
      value = {filter}
      onChange={(evt) => filterSet(evt.target.value)}
      />
    <table width="100%">
      <thead>
        <tr>
          <th>Manufacturer </th>
          <th>Model</th>
        </tr>
      </thead>
      <tbody>
        { cars 
        .filter(
          (cars) => cars.Model.toLowerCase().includes(filter.toLowerCase()))
        .map((cars)=>(
          <CarsRow cars = {cars} key={cars.ID}/>
          
        ))}
      </tbody>
      
    </table>
    </div>
  );
}

export default App;
