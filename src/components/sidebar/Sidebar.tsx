import { NavLink } from 'react-router-dom'

import styled from 'styled-components'

export const Sidebar = () => {


	return (
		<StyledSidebar>
			<h2>Sidebar</h2>
			<ul>
				<li>
					<StyledLink to='/profile'>Profile</StyledLink>
				</li>
				<li>
					<StyledLink to='/dialogs'>Messages</StyledLink>
				</li>
				<li>
					<a href='#'>News</a>
				</li>
				<li>
					<a href='#'>Music</a>
				</li>
				<li>
					<a href='#'>Settings</a>
				</li>
			</ul>
		</StyledSidebar>
	)
}

const StyledSidebar = styled.aside`
	width: 30%;
	background-color: #ff9393;
	height: 100vh;
	padding: 52px 0;
	text-align: center;
`

const StyledLink = styled(NavLink)`
	color: white;
`
