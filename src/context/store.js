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
    listIds: ["list-1", "list-2"]
}

export const DataContext = createContext()

export const DataProvider = (props) => {
    const [store, setStore] = useState(initialState);
    const changeTitle = (id, text) => {
        const item = store.lists[id]
        item.title = text

        const newStore = {
            ...store,
            lists: {
                ...store.lists,
                [id]: item
            }
        }

        setStore(newStore)
    }

    const changeCardTitle = (boardId, cardId, text) => {
        const item = store.lists[boardId].cards.find(item => item.id === cardId)
        item.title = text

        const newStore = {
            ...store,
            lists: {
                ...store.lists,
                [boardId]: {
                    ...store.lists[boardId],
                    cards: [...store.lists[boardId].cards.filter(card => card.id !== item.id), item]
                }
            }
        }

        setStore(newStore)
    }

    return (
        <DataContext.Provider value={{ store, changeTitle, changeCardTitle }}>
            {props.children}
        </DataContext.Provider>
    )
}