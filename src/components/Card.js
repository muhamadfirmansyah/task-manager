import { useContext, useState } from 'react'
import { DataContext } from '../context/store'

import '../sass/Card.scss'
import delicon from '../assets/delete.svg'
import { Draggable } from 'react-beautiful-dnd'

const Card = ({ id, data, index }) => {
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
        <Draggable draggableId={data.id} index={index}>
            {(provide) => (
                <div className="card-list"
                     ref={provide.innerRef}
                     {...provide.draggableProps}
                     {...provide.dragHandleProps}>
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
            )}
        </Draggable>
    )
}

export default Card