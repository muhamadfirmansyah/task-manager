import { useContext } from 'react';
import './App.scss';
import Header from './components/Header';
import { DataContext } from './context/store';

const App = () => {

  const val = useContext(DataContext);

  console.log(val);

  return (
    <div className="App">
      <Header />
    </div>
  )
}

export default App;
