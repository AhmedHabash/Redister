import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from '../Navbar/Nav'
import Footer  from "../Footer/Footer";
function Cheken() {
  const [cheken, setCheken] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast")
      .then((res) => res.json())
      .then((data) => {
        return setCheken(data.meals);
      })
      .catch((err) => console.log(err));
  });
  return (
    <>
    <Nav/>
    <h1 className=" text-center capitalize font-bold mt-5 w-fit m-auto text-amber-50 p-1.5 bg-amber-700">Cheken meals</h1>
    <div className="w-[95%] m-auto flex flex-wrap  items-center justify-between">
      {cheken.map((ch) => {
        return (
          <div
            className="card rounded-lg h-[240px] md:h-fit md:w-80 w-[200px] my-4 m-auto hover:-translate-y-[10px] transition-transform duration-300 bg-amber-700 text-amber-50 capitalize p-1.5 "
            key={ch.idMeal}
          >
            <img
              src={ch.strMealThumb}
              className="block  rounded-lg md:w-65 w-[170px] m-auto"
              alt={ch.strMeal}
            />
            <h3 className="text-center m-4">{ch.strMeal}</h3>
          </div>
        );
      })}
    </div>
    <button className="block bg-amber-700 text-amber-50 p-1.5 hover:bg-amber-600 transition-colors duration-300 m-auto my-5">
      <Link className="text-" to="/home">GO To Home</Link>
    </button>
    <Footer/>
    </>
  );
}

export default Cheken;
