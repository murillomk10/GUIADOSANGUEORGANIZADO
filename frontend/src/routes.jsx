import { BrowserRouter , Routes, Route } from "react-router";
import Home from "./pages/homepage";
import Sobre from "./pages/SobreNos";
import RequisitosParaDoar from "./pages/RequesitosParaDoar";

export default function Navegacao(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/quemsomos' element={<Sobre />} />
                <Route path='/reqdoar' element={<RequisitosParaDoar />} />
            </Routes>
        </BrowserRouter>
    )
}