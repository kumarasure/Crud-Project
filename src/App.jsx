
import CreateData from "./Components/CreateData";
import Read from "./Components/Read";
import Update from "./Components/Update";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
    {/* <Create /> */}
    <div className="container">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <CreateData />}></Route>
        <Route path="read" element={ <Read /> }></Route>
        <Route path="update" element={ <Update /> }></Route>
      </Routes> 
    </BrowserRouter>
    </div>
   
    </>
  );
}

export default App;
