import { CardViewMore } from './components/CardViewMore';
import { CurrentImage } from './components/CurrentImage';
import { FooterCompleted } from './components/FooterComplete';
import { Header } from './components/Header';
import { ItensProvider } from './ItensContext';
import { MainContainer } from './styles';


function App() {
  return (
    <ItensProvider>
      <Header/>
      <MainContainer>
        <CardViewMore />
        <CurrentImage/>
      </MainContainer>
      <FooterCompleted/>
    </ItensProvider>
  );
}

export default App;
