import { useContext, useState } from "react";
import { updateTitleBoard } from "../actions/listAction";
import { DataContext } from "../context/store";

import '../sass/BoardTitle.scss'

const BoardTitle = ({ id, title }) => {

    const [text, setText] = useState(title)
    const [open, setOpen] = useState(false)

    const { dispatch } = useContext(DataContext)

    const closeInput = (e) => {
        e.preventDefault()
        
        setOpen(false)

        dispatch(updateTitleBoard(id, text))
    }

    return (
        <div className="board-title">
            { open ? (
                <form onSubmit={closeInput}>
                    <input value={text} 
                           onChange={(e) => setText(e.target.value) }  
                           onBlur={closeInput} 
                           autoFocus />
                </form>
            ) : (
                <h3 onDoubleClick={() => setOpen(true)}>{ title }</h3>
            ) }
        </div>
    )
}

export default BoardTitle;