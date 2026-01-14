import {Routes, Route} from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/home";
import Contact from "../pages/Contact";
import About from "../pages/about";
import NotFound from "../pages/NotFoundPage";
import MiniProjects from "../pages/MiniProjects";

const AppRoute = (() => {
    return (
        <Routes>
            {/* Layout Wrapper for main pages */}
            <Route element = {<Layout/>}>
                <Route path="/" element = {<Home/>} />
                <Route path="/contact" element = {<Contact/>} />
                <Route path="/about" element = {<About/>} />
                <Route path="/mini" element = {<MiniProjects/>} />
                {/* Add your route here */}
            </Route>
            
            {/* Fallback i.e if we pass wrong pathname */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
});

export default AppRoute;