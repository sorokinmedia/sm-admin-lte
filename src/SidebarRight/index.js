import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'

export default function SidebarRight(props) {
	if (!props.isShow) return null
	return (
		<aside className="control-sidebar control-sidebar-dark">
			<ul className="nav nav-tabs nav-justified control-sidebar-tabs">
				<li className="active">
					<a href="#control-sidebar-folders-tab" data-toggle="tab">
						<i className="fa fa-folder" />
					</a>
				</li>
			</ul>
			<div className="tab-content">
				<h3 className="control-sidebar-heading">
					<Link
						to="/user/project-folder/index"
						onClick={props.handleClick}
					>
						Управление папками
					</Link>
				</h3>
			</div>
		</aside>
	)
}

SidebarRight.propTypes = {
	handleClick: PropTypes.func.isRequired,
	isShow: PropTypes.bool
}
