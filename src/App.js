import './App.css';
import AddNumbers from './components/AddNumbers';
import TablePrint from './components/TablePrint';
import StarsPrint from './components/StarsPrint';
import Features from './components/Features';

function App() {
  return (
    <div>
      <Features/>
      <AddNumbers />
      <TablePrint />
      <StarsPrint/>
    </div>
  );
}

export default App;
