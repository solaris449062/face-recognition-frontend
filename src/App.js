import Container from 'react-bootstrap/Container'

import Header from './components/Header'
import Footer from './components/Footer'

import HomeScreen from './screens/HomeScreen'

function App() {
  return (
    <div>
      <Header/>
      <main className="py-4">
        <Container>
          <HomeScreen />
        </Container>
      </main>
      <Footer/>
      My app
    </div>
  );
}

export default App;
