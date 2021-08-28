import { useContext } from 'react';
import './App.scss';
import Board from './components/Board';
import Header from './components/Header';
import { DataContext } from './context/store';

const App = () => {

  const { store } = useContext(DataContext);

  return (
    <div>
      <Header />
      
      <div className="container">
        { store.listIds.map((id) => {
          const data = store.lists[id]
          return <Board key={id} data={data} />
        }) }
      </div>
    </div>
  )
}

export default App;
