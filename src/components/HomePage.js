

import Announcements from "./Announcements ";
import Contact from "./Contact";


import External from "./External";
import Header from "./Header";
import NewNavbar from "./NewNavBar";

import Resource from "./Resource";
import Teammate from "./Teammate";


const HomePage=()=>{
    return(
        <>
         <NewNavbar/>
         <Announcements/>
         <Teammate/>
         <Resource/>
         <External/>
         <Contact/>
    
         
        </>
       
    )
}
export default HomePage;