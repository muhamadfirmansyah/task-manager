import { useContext } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import './App.scss';
import Board from './components/Board';
import Button from './components/Button';
import Header from './components/Header';
import { DataContext } from './context/store';

const App = () => {

  const { store, updateDrag } = useContext(DataContext);

  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result

    if (!destination) return
    if (type === "list") {
      const lists = store.listIds
      lists.splice(source.index, 1)
      lists.splice(destination.index, 0, draggableId)

      const newStore = {
        ...store,
        listIds: lists
      }

      updateDrag(newStore)

      return
    }

    const sourceList = store.lists[source.droppableId]
    const destinationList = store.lists[destination.droppableId]
    const draggingCard = sourceList.cards.find(item => item.id === draggableId)

    if (sourceList === destinationList) {
      sourceList.cards.splice(source.index, 1)
      destinationList.cards.splice(destination.index, 0, draggingCard)

      const newStore = {
        ...store,
        lists: {
          ...store.lists,
          [sourceList.id]: destinationList
        }
      }
      
      updateDrag(newStore)
    } else {
      sourceList.cards.splice(source.index, 1)
      destinationList.cards.splice(destination.index, 0, draggingCard)

      const newStore = {
        ...store,
        lists: {
          ...store.lists,
          [sourceList.id]: sourceList,
          [destinationList.id]: destinationList
        }
      }
      
      updateDrag(newStore)
    }
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
              { store.listIds.map((id, index) => {
                const data = store.lists[id]
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
