import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import { About, Home } from "../pages";

const ProjectRoutes = () => {
  return (
    <>
    <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>
    </Router>
    
    
    </>
  )
}

export default ProjectRoutes