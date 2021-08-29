import '../sass/Board.scss'
import BoardTitle from './BoardTitle';

import menu from '../assets/menu.svg'
import Card from './Card';
import Button from './Button';
import { Droppable } from 'react-beautiful-dnd';

const Board = ({ data }) => {
    return (
        <Droppable droppableId={data.id}>
            { (provide) => (
                <div ref={provide.innerRef}
                     {...provide.droppableProps}
                     className="board">
                    <div className="board__title">
                        <BoardTitle id={data.id} title={data.title} />
                        <div className="menu">
                            <img src={menu} alt="menu" />
                        </div>
                    </div>
                    <div>
                        { data.cards.map((card, index) => 
                            <Card key={card.id} id={data.id} data={card} index={index} />
                        ) }
                        { provide.placeholder }
                        <Button id={data.id} />
                    </div>
                </div>
            ) }
        </Droppable>
    )
}

export default Board;