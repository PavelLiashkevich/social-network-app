import { renderTree } from '../..'

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

export type StoreType = {
	_data: RootDataType
	addPost: (message: string) => void
	updateNewPostText: (newText: string) => void
	getState: () => RootDataType
}

export const store: StoreType = {
	_data: {
		profilePage: {
			posts: [
				{ id: '1', message: 'It', likesCount: '31' },
				{ id: '2', message: 'Programming', likesCount: '53' },
				{ id: '3', message: "I'm fine", likesCount: '23' },
			],
			newPostText: '',
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
		},
	},

	addPost(message: string) {
		const newPost: PostType = { id: '22', message: message, likesCount: '0' }

		store._data.profilePage.posts.push(newPost)

		renderTree(store._data)
	},

	updateNewPostText(newText: string) {
		store._data.profilePage.newPostText = newText

		renderTree(store._data)
	},

	getState() {
		return store._data
	}
}
