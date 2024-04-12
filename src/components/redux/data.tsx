import { renderTree } from "../.."

type PostType = {
	id: string
	message: string 
	likesCount: string
}

type ProfilePageType = {
	posts: PostType[]
	newPostText: string
}

// ================================

type DialogType = {
	id: string
	name: string
}

// ================================

type MessageType = {
	id: string
	message: string
}

// ================================

type DialogsPageType = {
	dialogs: DialogType[]
	messages: MessageType[]
}

export type RootDataType = {
	profilePage: ProfilePageType
	dialogsPage: DialogsPageType
}
export const data: RootDataType = {
	profilePage: {
		posts: [
			{ id: '1', message: 'It', likesCount: '31' },
			{ id: '2', message: 'Programming', likesCount: '53' },
			{ id: '3', message: "I'm fine", likesCount: '23' },
		],
		newPostText: 'Hello',
	},
	
	dialogsPage: {
		dialogs: [
			{ id: '1', name: 'Paul' },
			{ id: '2', name: 'Smith' },
			{ id: '3', name: 'Tom' },
		],
		messages: [
			{ id: '1', message: 'Hello' },
			{ id: '2', message: 'How are you?' },
			{ id: '3', message: "I'm fine" },
		],
	}
}

export const addPost = (message: string ) => {
	const newPost: PostType = { id: '22', message: message, likesCount: '0' }

	data.profilePage.posts.push(newPost)

	renderTree(data)
}

