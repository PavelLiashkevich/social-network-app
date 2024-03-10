type MessagePropsType = {
	message: string
}

export const Message = ({message}: MessagePropsType) => {
	return <div>{message}</div>
}
