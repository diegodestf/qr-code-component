import { Helmet } from 'react-helmet';
import { Qr } from './components/Qr';

function App() {
  return (
    <div className="App">
      <Helmet>
        <html lang="en" />
        <title>QR Code Component</title>
      </Helmet>
      <Qr />
    </div>
  );
}

export default App;
