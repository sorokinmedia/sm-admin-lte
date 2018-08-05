import PropTypes from 'prop-types'
import React from 'react'
import { NavLink } from 'react-router-dom'

function SidebarLink(props) {
	const { path, to, className } = props
	const active = path === to

	return (
		<NavLink {...props} className={className}>
			{props.children}
		</NavLink>)
}

SidebarLink.propTypes = {
	className: PropTypes.string,
	to: PropTypes.string,
	path: PropTypes.string,
	children: PropTypes.node,
}

export default SidebarLink
