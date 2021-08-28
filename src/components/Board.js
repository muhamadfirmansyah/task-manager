import '../sass/Board.scss'

const Board = ({ data }) => {
    return (
        <div className="board">
            <h1>{ data.title }</h1>
            <div>
                card
            </div>
            <button>add</button>
        </div>
    )
}

export default Board;