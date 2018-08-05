import React from 'react'
import PropTypes from 'prop-types'

export default function Footer(props) {
	if (!props.isShow) return null
	return <footer className="main-footer">{props.children}</footer>
}

Footer.propTypes = {
	children: PropTypes.node,
	isShow: PropTypes.bool
}
