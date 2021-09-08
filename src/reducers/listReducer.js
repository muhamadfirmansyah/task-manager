import { v4 as uuid } from 'uuid';

export const listReducer = (state, action) => {
    const { type, payload } = action

    switch (type) {
        case "UPDATETITLEBOARD":
            var item = state.lists[payload.boardId]
            item.title = payload.text

            var newState = {
                ...state,
                lists: {
                    ...state.lists,
                    [payload.boardId]: item
                }
            }

            return newState

        case "UPDATETITLECARD":
            var item = state.lists
            var card = item[payload.boardId].cards.find(item => item.id === payload.cardId)
            card.title = payload.text

            var newState = {
                ...state,
                lists: item
            }

            return newState

        case "DELETECARD":
            var item = state.lists[payload.boardId]

            item.cards = item.cards.filter(item => item.id !== payload.cardId)

            var newState = {
                ...state,
                lists: {
                    ...state.lists,
                    [payload.boardId]: item
                }
            }

            return newState

        case "CREATECARD":
            var item = state.lists[payload.boardId]

            var id = uuid()
            var newCard = {
                id: `card-${id}`,
                title: payload.text
            }

            item.cards = [...item.cards, newCard]

            var newState = {
                ...state,
                lists: {
                    ...state.lists,
                    [payload.boardId]: item
                }
            }

            return newState

        case "CREATEBOARD":
            var id = `list-${uuid()}`
            var newBoard = {
                id: id,
                title: payload,
                cards: []
            }

            var newState = {
                listIds: [...state.listIds, id],
                lists: {
                    ...state.lists,
                    [id]: newBoard
                }
            }

            return newState

        case "UPDATEDRAG":
            const { destination, source, draggableId, type } = payload

            if (!destination) return state
            if (type === "list") {
                const lists = state.listIds
                lists.splice(source.index, 1)
                lists.splice(destination.index, 0, draggableId)

                const newState = {
                    ...state,
                    listIds: lists
                }

                return newState
            }

            const sourceList = state.lists[source.droppableId]
            const destinationList = state.lists[destination.droppableId]
            const draggingCard = sourceList.cards.find(item => item.id === draggableId)

            if (sourceList === destinationList) {
                sourceList.cards.splice(source.index, 1)
                destinationList.cards.splice(destination.index, 0, draggingCard)

                const newState = {
                    ...state,
                    lists: {
                        ...state.lists,
                        [sourceList.id]: destinationList
                    }
                }

                return newState

            } else {
                sourceList.cards.splice(source.index, 1)
                destinationList.cards.splice(destination.index, 0, draggingCard)

                const newState = {
                    ...state,
                    lists: {
                        ...state.lists,
                        [sourceList.id]: sourceList,
                        [destinationList.id]: destinationList
                    }
                }

                return newState
            }
    
        default:
            return state
    }
}