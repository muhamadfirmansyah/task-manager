import '../sass/Board.scss'
import BoardTitle from './BoardTitle';

import menu from '../assets/menu.svg'
import Card from './Card';

const Board = ({ data }) => {
    return (
        <div className="board">
            <div className="board__title">
                <BoardTitle id={data.id} title={data.title} />
                <div className="menu">
                    <img src={menu} alt="menu" />
                </div>
            </div>
            <div>
                { data.cards.map(card => 
                    <Card key={card.id} id={data.id} data={card} />
                ) }
            </div>
            <button>add</button>
        </div>
    )
}

export default Board;