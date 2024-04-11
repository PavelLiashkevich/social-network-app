type PostType = {
	id: string;
	message: string;
	likeCount: string;
}

type PostsType = PostType[]

type ProfilePageType = {
	posts: PostsType;
}

type DialogType = {
	id: string;
	name: string;
}

type DialogsType = DialogType[];

type MessageType = {
	id: string;
	message: string;
}

type MessagesType = MessageType[];

type DialogsPageType = {
	dialogs: DialogsType;
	messages: MessagesType;
}

type DataType = ProfilePageType | DialogsPageType

export const data = {
	profilePage: {
		posts: [
			{ id: '1', message: 'It', likeCount: '31' },
			{ id: '2', message: 'Programming', likeCount: '53' },
			{ id: '3', message: "I'm fine", likeCount: '23' },
		],
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
