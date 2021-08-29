import { useState, createContext } from "react";
import { v4 as uuid } from 'uuid';

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
        const item = store.lists
        const card = item[boardId].cards.find(item => item.id === cardId)
        card.title = text

        const newStore = {
            ...store,
            lists: item
        }

        setStore(newStore)
    }

    const deleteListCard = (boardId, cardId) => {
        const item = store.lists[boardId]
        
        item.cards = item.cards.filter(item => item.id !== cardId)

        const newStore = {
            ...store,
            lists: {
                ...store.lists,
                [boardId]: item
            }
        }

        setStore(newStore)
    }

    const createCard = (listId, text) => {
        const item = store.lists[listId]

        const id = uuid()
        const newCard = {
            id: `card-${id}`,
            title: text
        }

        item.cards = [...item.cards, newCard]

        const newStore = {
            ...store,
            lists: {
                ...store.lists,
                [listId]: item
            }
        }

        setStore(newStore);
    }

    return (
        <DataContext.Provider value={{ store, changeTitle, changeCardTitle, deleteListCard, createCard }}>
            {props.children}
        </DataContext.Provider>
    )
}