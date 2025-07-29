import { useState } from "react";

const cars = ["Toyota", "Honda", "Ford", "Chevrolet", "Nissan"];
const colors = ["Red", "Blue", "Green", "Black", "White"];
export default function App() {
  const [selectedCar, setSelectedCar] = useState("Toyota");
  const [selectedColor, setSelectedColor] = useState("Red");

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "car") {
      setSelectedCar(value);
    } else if (name === "color") {
      setSelectedColor(value);
    }
  };

  return (
    <div>
      <h2>Car Selection</h2>
      <label>
        Select car:
        <select name="car" value={selectedCar} onChange={handleChange}>
          {cars.map((car) => (
            <option key={car} value={car}>
              {car}
            </option>
          ))}
        </select>
      </label>
      <label>
        Select color:
        <select name="color" value={selectedColor} onChange={handleChange}>
          {colors.map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>
      </label>
      <h2>
        Selected Car: {selectedCar} Color: {selectedColor}
      </h2>
    </div>
  );
}
