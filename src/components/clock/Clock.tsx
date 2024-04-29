import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

type ClockPropsType = {}

const convertNumber = (number: number) => {
	return number < 10 ? `0${number}` : number
}

export const Clock = () => {
	const [time, setTime] = useState(new Date())

	useEffect(() => {
		const timer = setInterval(() => {
			setTime(new Date())
		}, 1000)

		return () => clearInterval(timer)
	}, [])

	return (
		<StyledClock>
			<span>{convertNumber(time.getHours())}</span>:
			<span>{convertNumber(time.getMinutes())}</span>:
			<span>{convertNumber(time.getSeconds())}</span>
		</StyledClock>
	)
}

const StyledClock = styled.div`
	width: 120px;
`
