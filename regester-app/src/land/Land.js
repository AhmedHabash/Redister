
function Land() {
  return (
    <>
      <div className="land-container w-full bg-amber-100 text-amber-900 p-5 bg-[url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60')] bg-cover bg-center bg-no-repeat h-screen flex items-center ">
        <div className="ml-5 bg-amber-700 text-2xl text-amber-50 font-bold p-2.5">
            <h1 className="my-4">
                Welcome to Foodies
            </h1>
            <p>
                Foodies is a restaurant that offers a wide variety of delicious dishes.
            </p>
            <button className="bg-amber-600 text-amber-50 p-3 rounded-xl text-center mt-5  hover:bg-blue-700 transition duration-300 cursor-pointer">
                Order Now
            </button>
        </div>
      </div>
    </>
  )
}

export default Land;
