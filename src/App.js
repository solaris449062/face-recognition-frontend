import Container from 'react-bootstrap/Container'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

import HomeScreen from './screens/HomeScreen'
import ImageScreen from './screens/ImageScreen'
import LoginScreen from './screens/LoginScreen'

function App() {
  return (
    <BrowserRouter>
        <Header/>
        <main className="py-4">
          <Container>
            <Routes>
              <Route path='/' element={<HomeScreen/>} exact />
              <Route path='/photos/:id' element={<ImageScreen/>} />
              <Route path='/login' element={<LoginScreen/>} />
            </Routes>
          </Container>
        </main>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
