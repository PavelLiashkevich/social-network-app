import styled from 'styled-components'

import { Post } from './post/Post'
import { data } from '../../redux/data'
import { useRef } from 'react'
import React from 'react'

type MainPropsType = {
	addPost: (id: string, message: string, likeCount: string) => void
}

export const MyPosts = ({ addPost }: MainPropsType) => {
	const addNewPost = (id: string, message: string, likeCount: string) => {
		debugger;
		addPost(id, message, likeCount)
	}

	const dataInInput = React.useRef<HTMLInputElement>(null)

	return (
		<div>
			<h2>My Posts</h2>
			<input type='text' ref={dataInInput} />
			{/*<StyledAddPostButton onClick={addNewPost}>New Post</StyledAddPostButton>*/}
			<div>
				{data.profilePage.posts.map(post => (
					<Post
						key={post.id}
						message={post.message}
						likeCount={post.likeCount}
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
