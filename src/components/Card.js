import { useContext, useState } from 'react'
import { DataContext } from '../context/store'

import '../sass/Card.scss'
import delicon from '../assets/delete.svg'

const Card = ({ id, data }) => {
    const [text, setText] = useState(data.title)
    const [open, setOpen] = useState(false)

    const { changeCardTitle, deleteListCard } = useContext(DataContext)

    const closeInput = (e) => {
        e.preventDefault();
        
        changeCardTitle(id, data.id, text)

        setOpen(false)
    }

    const deleteCard = () => {
        deleteListCard(id, data.id)
    }

    return (
        <div className="card-list">
            { open ? (
                <form onSubmit={closeInput}>
                    <input autoFocus
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        onBlur={closeInput} />
                </form>
            ) : (
                <div className="card-list__text">
                    <p onDoubleClick={() => setOpen(true) }>{ data.title }</p>
                    <img src={delicon} alt="delete" onClick={deleteCard} />
                </div>
            ) }
        </div>
    )
}

export default Card