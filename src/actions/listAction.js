export const updateTitleBoard = (boardId, text) => {
    return {
        type: "UPDATETITLEBOARD",
        payload: {
            boardId: boardId,
            text: text
        }
    }
}

export const updateTitleCard = (boardId, cardId, text) => {
    return {
        type: "UPDATETITLECARD",
        payload: {
            boardId: boardId,
            cardId: cardId,
            text: text
        }
    }
}

export const deleteCard = (boardId, cardId) => {
    return {
        type: "DELETECARD",
        payload: {
            boardId: boardId,
            cardId: cardId
        }
    }
}

export const createCard = (boardId, text) => {
    return {
        type: "CREATECARD",
        payload: {
            boardId: boardId,
            text: text
        }
    }
}

export const createBoard = (text) => {
    return {
        type: "CREATEBOARD",
        payload: text
    }
}

export const updateDrag = (data) => {
    return {
        type: "UPDATEDRAG",
        payload: data
    }
}