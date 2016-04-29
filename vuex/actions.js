export const addNote = ({dispatch}) => {
	dispatch('add')
}

export const editNote = ({dispatch}, e) => {
	dispatch('edit', e.target.value)
}

export const deleteNote = ({dispatch}) => {
	dispatch('delete')
}

export const updateNote = ({dispatch}, note) => {
	dispatch('set_active', note)
}

export const favoriteNote = ({dispatch}) => {
	dispatch('favorite')
}
