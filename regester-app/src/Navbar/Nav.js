import { Link} from "react-router-dom";
function Nav() {
  return (
    <div className="sticky top-0 nav-container w-full bg-amber-700 text-amber-50 p-5">
      <nav className="w-[95%] mx-auto flex items-center justify-between">
        <div className="logo flex items-center gap-4">
          <i class="fa-solid fa-utensils text-amber-200 text-[30px]"></i>
          <h1 className="font-bold">Foodies</h1>
        </div>
        <ul className="flex items-center justify-between w-2/3">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/cheken">Cheken</Link></li>
          <li><Link to="/beef">Beef</Link></li>
          <li><Link to="/salmon">Salmon</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
