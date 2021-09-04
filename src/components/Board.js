import '../sass/Board.scss'
import BoardTitle from './BoardTitle';

import menu from '../assets/menu.svg'
import Card from './Card';
import Button from './Button';
import { Draggable, Droppable } from 'react-beautiful-dnd';

const Board = ({ data, index }) => {
    return (
        <Draggable draggableId={data.id} index={index}>
            { (provide) => (
                <div ref={provide.innerRef}
                     {...provide.draggableProps}
                     { ...provide.dragHandleProps }
                     className="board">
                    <div className="board__title">
                        <BoardTitle id={data.id} title={data.title} />
                        <div className="menu">
                            <img src={menu} alt="menu" />
                        </div>
                    </div>
                    <Droppable droppableId={data.id}>
                        { (provide) => (
                            <div ref={provide.innerRef}
                                { ...provide.droppableProps }>
                                { data.cards.map((card, index) => 
                                    <Card key={card.id} id={data.id} data={card} index={index} />
                                ) }
                                { provide.placeholder } 
                            </div>
                        ) }
                    </Droppable>
                    <Button id={data.id} />
                </div>
            ) }
        </Draggable>
    )
}

export default Board;