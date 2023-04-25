import React from "react";
import Navbar from "../components/Navbar";
import Images from "../components/Image";
import Footer from "../components/Footer";
import Meetings from "../components/Meetings";
import Option from "../components/Option";
import ContactUs from "../components/ContactUs";
import Topbars from "../components/TopBar";

// import {Navbar, Images, Footer, Meetings, Option,Contact,Topbar} from "../components"
const Home = () => {
    return ( 
    <div>
    <Topbars/>
    <Navbar/>
    <Images />
    <Option/>
    <Meetings />
    <ContactUs/>
    <Footer/>
    </div>
     );
}
 
export default Home;    
