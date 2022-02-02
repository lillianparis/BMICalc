import './App.css';
import Calc from "./Pages/landing/landing";
import ParticlesBg from 'particles-bg'


function App() {

    return (
      <>
     <ParticlesBg type="circle" bg={true} />
        <Calc />
      </>
    );

}

export default App;
