import { BrowserRouter , Routes, Route } from "react-router";
import Home from "./pages/homepage";
import Sobre from "./pages/SobreNos";
import RequisitosParaDoar from "./pages/RequesitosParaDoar";
import CuidadosNaDoacao from "./pages/cuidadosdoacao";
import PorQueDoar from "./pages/PorQueDoar";

export default function Navegacao(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/quemsomos' element={<Sobre />} />
                <Route path='/reqdoar' element={<RequisitosParaDoar />} />
                <Route path='/cuidados' element={<CuidadosNaDoacao />} />
                <Route path='/pqdoar' element={<PorQueDoar />} />
            </Routes>
        </BrowserRouter>
    )
}