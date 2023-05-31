export const addNewMember = (newMember) => {
    return {
        type: "add_new_member",
        payload: newMember
    }
}

export const editMember = (editInfo) => {
    return {
        type: "edit_member",
        payload: editInfo
    }
}

export const isLogedIn = (value) => {
    return {
        type: "loggin",
        payload: value
    }
} 
