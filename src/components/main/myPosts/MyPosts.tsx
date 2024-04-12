import React from 'react'
import styled from 'styled-components'

import { Post } from './post/Post'
import { data } from '../../redux/data'

type MainPropsType = {
	addPost: (message: string) => void;
	postText: string
}

export const MyPosts = ({ addPost, postText }: MainPropsType) => {
	
	const dataInInput = React.useRef<HTMLTextAreaElement>(null)
	
	const addNewPost = () => {
		let text = dataInInput.current?.value

		addPost(text ? text : '');
	}

	const onPostChange = () => {
		let text = dataInInput.current?.value
		console.log(text);
	}

	return (
		<div>
			<h2>My Posts</h2>
			<textarea ref={dataInInput} onChange={onPostChange} value={postText}/>
			<StyledAddPostButton onClick={addNewPost}>New Post</StyledAddPostButton>
			<div>
				{data.profilePage.posts.map(post => (
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
