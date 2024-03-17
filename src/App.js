import './App.css';
import Home from './section/Home';
import PartnerShip from './section/Partnership';
import SectionText from './section/SectionText';
import KelolaLahan from './section/KelolaLahan';
import Projek from './section/ProjekRuntapi';
import MainSection from './section/MainSection';
import FAQ from './section/Faq';
import FinalSection from './section/FinalSection'

const App = () => {
  return (
    <>
      <Home />
      <PartnerShip />
      <SectionText />
      <KelolaLahan />
      <Projek />
      <MainSection />
      <FAQ />
      <FinalSection />
    </>
  )
}

export default App;