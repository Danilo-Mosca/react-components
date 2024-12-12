import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';

function App() {
  const [count, setCount] = useState(0)

  //parte html da ritornare
  return (
    <>
      <Header />
      <main>
        <Card />
      </main>
      <Footer />
    </>
  );
}

export default App