export const addNote = ({dispatch}) => {
	dispatch('ADD')
}

export const editNote = ({dispatch}, e) => {
	dispatch('EDIT', e.target.value)
}

export const deleteNote = ({dispatch}) => {
	dispatch('DELETE')
}

export const updateNote = ({dispatch}, key, note) => {
	dispatch('SET_ACTIVE', key, note)
}

export const favoriteNote = ({dispatch}) => {
	dispatch('FAVORITE')
}
