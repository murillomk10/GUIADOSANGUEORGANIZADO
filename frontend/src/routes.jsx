import { BrowserRouter , Routes, Route } from "react-router";
import Home from "./pages/homepage";

export default function Navegacao(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}