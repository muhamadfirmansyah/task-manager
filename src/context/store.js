import { useState, createContext } from "react";

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
    listIds: []
}

export const DataContext = createContext()

export const DataProvider = (props) => {
    const [store, setStore] = useState(initialState);

    return (
        <DataContext.Provider value={{ store }}>
            {props.children}
        </DataContext.Provider>
    )
}