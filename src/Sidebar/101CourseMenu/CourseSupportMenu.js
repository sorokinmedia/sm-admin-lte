import PropTypes from 'prop-types'
import React from 'react'
import menuDecorator from '../menuDecorator'
import SidebarLink from '../SidebarLink/index'

function CourseSupportMenu(props) {
	return (
		<ul className="sidebar-menu tree">
			<li className="header"><span><span>Саппорт меню</span></span></li>
			<li>
				<SidebarLink
					to="/support/dashboard/"
					onClick={props.onLink}
					match={props.match.path}
				>
					<i className="fa fa-dashboard text-green" />
					<span>Главный экран</span>
				</SidebarLink>
			</li>
		</ul>
	)

}

CourseSupportMenu.propTypes = {
	isUserViewCourse: PropTypes.bool,
	match: PropTypes.object,
	back: PropTypes.func,
	onLink: PropTypes.func
}

export default menuDecorator(CourseSupportMenu, { menuId: 'support' })
