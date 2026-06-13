import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "../Navbar/Nav";
import Footer from "../Footer/Footer";
function Beef() {
  const [beef, setBeef] = useState([]);
  useEffect(() => {
    fetch("https://themealdb.com/api/json/v1/1/filter.php?i=beef")
      .then((res) => res.json())
      .then((data) => {
        return setBeef(data.meals);
      });
  });
  return (
    <>
    <Nav/>
    <h1 className="w-[200px] text-amber-50 font-bold bg-amber-600 m-auto text-center mt-6 py-4 px-10">Beef Meals</h1>
    <div  className="w-[95%] m-auto flex flex-wrap  items-center justify-between mt-[30px]">
      {beef.map((be) => {
        return (
          <>
            <div className="card rounded-lg  h-[240px] md:h-fit md:w-80 w-[200px] hover:-translate-y-[10px] transition-transform duration-300 my-4 m-auto  bg-amber-700 text-amber-50 capitalize p-1.5 "  key={be.idMeal}>
              <img className="block  rounded-lg md:w-65 w-[170px] m-auto" src={be.strMealThumb} alt={be.strMeal} />
              <h3 className="text-center m-4">{be.strMeal}</h3>
            </div>
          </>
        );
      })}
    </div>
    <button className="block bg-amber-700 text-amber-50 p-1.5 hover:bg-amber-600 transition-colors duration-300 m-auto my-5"><Link to="/home">back to home page</Link></button>
    <Footer/>
    </>
  );
}

export default Beef;
