export const addNote = ({dispatch}) => {
	dispatch('ADD')
}

export const editNote = ({dispatch}, e) => {
	dispatch('EDIT', e.target.value)
}

export const deleteNote = ({dispatch}) => {
	dispatch('DELETE')
}

export const updateNote = ({dispatch}, note) => {
	dispatch('SET_ACTIVE', note)
}

export const favoriteNote = ({dispatch}) => {
	dispatch('FAVORITE')
}
