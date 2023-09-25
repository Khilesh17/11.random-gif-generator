import { Random } from './components/Random';
import { Tag } from './components/Tag';


function App() {
  return (
    <div className="App background">
      <h1>Random GIF Generator</h1>

      <div className='container'>
        <Random></Random>
        <Tag></Tag>
      </div>
    </div>
  );
}

export default App;
