import { Outlet } from "react-router-dom";
import Navber from "../Navber/Navber";


const MainOutlet = () => {
    return (
        <div >
            <Navber></Navber>

            <div className="bg-purple-600">
            <Outlet></Outlet>
            </div>
          
        </div>
    );
};

export default MainOutlet;