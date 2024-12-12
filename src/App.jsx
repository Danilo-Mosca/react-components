import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';
// Importo l'oggetto cities
import cities from './data/cities';

function App() {
  const [count, setCount] = useState(0)
  const city = [...cities];
  
  //parte html da ritornare
  return (
    <>
      <Header />
        <main className="container">
          <div className="row">
          <Card cities={city} />
          </div>
        </main>
      <Footer />
    </>
  );
}

export default App