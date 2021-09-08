import { useContext, useState } from "react"
import Textarea from 'react-textarea-autosize'
import { createBoard, createCard } from "../actions/listAction";

import close from '../assets/close.svg';
import { DataContext } from "../context/store";

import '../sass/Button.scss'

const Button = ({ id, list }) => {

    const [open, setOpen] = useState(false)
    const [text, setText] = useState("")

    const { dispatch } = useContext(DataContext)

    const addCard = () => {
        if (text !== "") {
            dispatch(createCard(id, text))
            setText("")
        }

    }

    const addBoard = () => {
        if (text !== "") {
            dispatch(createBoard(text))
            setText("")
        }

    }

    const showForm = () => {
        const textButton = list ? 'add board' : 'add card'
        const placeholder = list ? 'enter board title' : 'enter card title'
        const marginTop = list ? "1rem" : "0.3rem"

        return (
            <div>
                <div className="form-box" style={{ marginTop: marginTop }}>
                    <Textarea className="text-area" 
                              placeholder={placeholder} 
                              onBlur={() => setOpen(false) }
                              value={text}
                              onChange={(e) => setText(e.target.value)}
                              autoFocus />
                    <div>
                        <button className="add" onMouseDown={ list ? addBoard : addCard }>{ textButton }</button>
                        <button className="close">
                            <img src={close} alt="close" onClick={() => setOpen(false)} />
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    const showButton = () => {
        const textButton = list ? 'add another board' : 'add card'
        const opacityButton = list ? 1 : 0.5
        const colorButton = list ? '#FFFFFF' : 'inherit'
        const backgroundButton = list ? 'rgba(0,0,0,.25)' : 'inherit'
        const borderRadiusButton = list ? '3px' : 'none'

        return (
            <div className="add-button"
                 style={{
                     opacity: opacityButton,
                     color: colorButton,
                     background: backgroundButton,
                     borderRadius: borderRadiusButton
                 }}
                 onClick={() => setOpen(true)}>
                + { textButton }
            </div>
        )
    }

    return open ? showForm() : showButton()
}

export default Button