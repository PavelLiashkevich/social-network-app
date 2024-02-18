import styled from 'styled-components'

export const Sidebar = () => {
	return (
		<StyledSidebar>
			<h2>Sidebar</h2>

			<ul>
				<li>
					<a href='#'>Profile</a>
				</li>
				<li>
					<a href='#'>Messages</a>
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
