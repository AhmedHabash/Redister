import { useState, useEffect } from "react";
function Data() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=")
      .then((res) => res.json())
      .then((data) => {
        return setData(data.meals);
      })
      .catch((err) => console.log(err));
  });
  return (
    <div className="my-3.5 card-container  w-[95%] m-auto flex flex-wrap gap-1.5 justify-between items-center">
      {data.map((meal) => {
        return (
          <div className="card rounded-lg h-[240px] md:h-fit md:w-80 w-[200px] my-4 m-auto  bg-amber-700 text-amber-50 capitalize p-1.5" key={meal.idMeal}>
            <img src={meal.strMealThumb} className=" block  rounded-lg md:w-65 w-[170px] m-auto" alt={meal.strMeal} />
            <h3 className="text-center my-5">{meal.strMeal}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Data;
