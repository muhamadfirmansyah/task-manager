import { useContext } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { updateDrag } from './actions/listAction';
import './App.scss';
import Board from './components/Board';
import Button from './components/Button';
import Header from './components/Header';
import { DataContext } from './context/store';

const App = () => {

  const { lists, dispatch } = useContext(DataContext);

  const onDragEnd = (result) => {
    dispatch(updateDrag(result))
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="app" type="list">
        { (provide) => (
          <div ref={provide.innerRef}
          { ...provide.droppableProps }
          >
            <Header />
            
            <div className="container">
              { lists.listIds.map((id, index) => {
                const data = lists.lists[id]
                return <Board key={id} data={data} index={index} />
              }) }

              <Button list />
              { provide.placeholder }
            </div>
          </div>
        ) }
      </Droppable>
    </DragDropContext>
  )
}

export default App;
