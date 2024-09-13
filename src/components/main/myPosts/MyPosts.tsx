import styled from 'styled-components'

import { store } from '../../redux/data'
import { Post } from './post/Post'
import { ChangeEvent, useRef } from 'react'

type MainPropsType = {
	postText: string
	addPost: (message: string) => void;
	updatePostText: (newText: string) => void;
}

export const MyPosts = ({ postText, addPost, updatePostText }: MainPropsType) => {
	
	// const newPostText = useRef()

	const addNewPost = () => {
		addPost(postText);
	}

	const onPostChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
		updatePostText(event.currentTarget.value);
	}

	return (
		<div>
			<h2>My Posts</h2>
			<textarea value={postText} onChange={onPostChangeHandler} />
			<StyledAddPostButton onClick={addNewPost}>New Post</StyledAddPostButton>
			<div>
				{store._data.profilePage.posts.map(post => (
					<Post
						key={post.id}
						message={post.message}
						likeCount={post.likesCount}
					/>
				))}
			</div>
		</div>
	)
}

const StyledAddPostButton = styled.button`
	background-color: #ddef8f;
	color: black;
	border: none;
	padding: 10px 20px;
	border-radius: 5px;
	cursor: pointer;
	box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
	transition: box-shadow 0.3s ease;

	&:hover {
		box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);
	}
`
