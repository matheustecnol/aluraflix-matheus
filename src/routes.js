import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/inicio";
import Player from "pages/Player";
import NovoVideo from "pages/NovoVideo";
import EditarVideo from "pages/EditarVideo";
import NaoEncontrada from "pages/NaoEncontrada";
import Cabecalho from "components/Cabecalho";
import Rodape from "components/Rodape";


function AppRoutes() {
    return (
        <BrowserRouter>
        <Cabecalho/>
            <Routes>
                <Route path="/" element={<Inicio/>}></Route>
                <Route path="/:id" element={<Player/>}></Route>
                <Route path="/novovideo" element={<NovoVideo/>}></Route>
                <Route path="/editarvideo" element={<EditarVideo/>}></Route>
                <Route path="*" element={<NaoEncontrada />}></Route>
            </Routes>        
        </BrowserRouter>

    )
}

export default AppRoutes;