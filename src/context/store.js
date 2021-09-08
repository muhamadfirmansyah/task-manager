import { createContext, useReducer } from "react";
import { listReducer } from "../reducers/listReducer";

const cards = [
    {
        id: "card-1",
        title: "Learning how to code",
    },
    {
        id: "card-2",
        title: "Practicing how to code",
    },
    {
        id: "card-3",
        title: "Create portofolio",
    }
]

const initialState = {
    lists: {
        "list-1": {
            id: "list-1",
            title: "Backlog",
            cards: cards
        },
        "list-2": {
            id: "list-2",
            title: "On progress",
            cards: []
        }
    },
    listIds: ["list-1", "list-2"]
}

export const DataContext = createContext()

export const DataProvider = (props) => {
    
    const [lists, dispatch] = useReducer(listReducer, initialState)

    return (
        <DataContext.Provider value={{ lists, dispatch }}>
            {props.children}
        </DataContext.Provider>
    )
}