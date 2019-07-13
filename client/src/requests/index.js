const defaultOptions = {
	method: 'POST',
	headers: { 'Content-Type': 'application/json' },
}

const api = process.env.NODE_ENV === 'production'? '/graphql' : 'http://localhost:5000/graphql'

export const addNoteRequest = async ({title, text}) => {
	const options = {
		...defaultOptions,
		body: addNoteMutation({title, text})
	}
	return fetch(api, options).then(res => res.json())
}
const addNoteMutation =  ({title, text}) => {
	return `{"variables": {"input": {"title": "${title}", "text": "${text}"}},"query":"mutation change($input: NewNote){ newNote: addNote(input: $input) {id title text } }"}`
}


export const getAllNotesRequest = async () => {
	const options = {
		...defaultOptions,
		body: getAllNotesQuery
	}
	return fetch(api, options).then(res => res.json())
}
const getAllNotesQuery = '{"query":"{ allNotes: getAllNotes {id title text } }"}'


export const editNoteRequest = async ({id, title, text}) => {
	const options = {
		...defaultOptions,
		body: editNoteMutation({id, title, text})
	}
	return fetch(api, options).then(res => res.json())
}
const editNoteMutation = ({id, title, text}) => {
	return `{"variables": {"input": {"id": "${id}", "title": "${title}", "text": "${text}"}},"query":"mutation edit($input: EditNote){ editNote(input: $input) {id title text } }"}`
}