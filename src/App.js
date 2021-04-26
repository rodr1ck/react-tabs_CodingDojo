import './App.css';
import Tabs from './components/Tabs';

const tabDeDatabase = [
  {etiqueta: 'Tab1', contenido: 'contenido1'},
  {etiqueta: 'Tab2', contenido: 'contenido2'},
  {etiqueta: 'Tab3', contenido: 'contenido3'}
]

function App() {
  return (
    <div className="App">
      <Tabs tabs={tabDeDatabase}/>
    </div>
  );
}

export default App;
