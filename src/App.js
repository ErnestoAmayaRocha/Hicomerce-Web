import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/* Páginas de HTML */
import Contacto from './pages/HC-Contacto';
import IndexHC from './pages';
import ServiciosIA from './pages/HC-ServiciosIA';
import Servicios360 from './pages/HC-Servicios360';
import Portafolio from './pages/HC-Portafolio';
import PageNotFound from './pages/PageNotFound';
import ClientesHC from './pages/HC-Clientes';
import NosotrosHC from './pages/HC-Nosotros';
import AvisoPr from './pages/HC-AvisoPrivacidad';
/* Componentes */
import Layout from './components/Layout';

/* Componente para llevar al Top al dar click en un link */
import ScrollToTop from './utils/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />

      <Routes>

        <Route path='/' element={<Layout />}>
          <Route index element={<IndexHC />} />
          <Route path='clientes' element={<ClientesHC />} />
          <Route path='contacto' element={<Contacto />} />
          <Route path='nosotros' element={<NosotrosHC />} />
          <Route path='servicios360' element={< Servicios360 />} />
          <Route path='serviciosIA' element={<ServiciosIA />} />
          <Route path='portafolio' element={< Portafolio />} />
          <Route path='aviso-de-privacidad' element={< AvisoPr />} />
          <Route path='*' element={<PageNotFound />} />
        </Route>

      </Routes>

    </Router>
  )
}

export default App;