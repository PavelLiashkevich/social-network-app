import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

type DialogPropsType = {
	name: string
	id: string
}

export const Dialog = ({ name, id }: DialogPropsType) => {
	return <StyledLink to={'/dialogs/' + id}>{name}</StyledLink>
}

const StyledLink = styled(NavLink)`
	color: white;

	&.active {
		color: #cb9610;
	}

	&:hover {
		color: green;
	}
`
