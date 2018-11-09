import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'

function SidebarLink(props) {
	const { path, to, className } = props
	const active = path === to

	return (
		<Link {...props} className={className}>
			{props.children}
		</Link>)
}

SidebarLink.propTypes = {
	className: PropTypes.string,
	to: PropTypes.string,
	path: PropTypes.string,
	children: PropTypes.node,
}

export default SidebarLink
