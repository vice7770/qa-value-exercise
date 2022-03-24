import TopBar from './components/TopBar/TopBar';
import Questionary from './components/Questionary/Questionary';

function App() {
  return (
    <div className="flex ">
      <div className='content-container'>
        <TopBar/>
        <Questionary/>
      </div>
    </div>
  );
}

export default App;
