import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout() {
    

    return (
        <div className="bg-fondo">
            <div className="relative">
                <Navbar/>
            </div>
            <div>
                <Outlet/>
            </div>
           <div>
                <Footer/>
           </div>
        </div>
    );
}
