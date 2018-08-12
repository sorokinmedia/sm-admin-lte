import PropTypes from 'prop-types'
import React from 'react'
import { getCookie } from '../../helpers/CookieHelper'
import menuDecorator from '../menuDecorator'
import SidebarLink from '../SidebarLink/index'

function CourseAdminMenu(props) {
	const isUserView = getCookie('auth_token_main')
	const intoBack = (
		<li>
			<a
				className="hovered"
				onClick={() => props.back()}
			>
				<i className="fa fa-undo text-green" />
				<span>На основного</span>
			</a>
		</li>
	)
	const users = (
		<li>
			<SidebarLink
				to="/user/default/index"
				onClick={props.onLink}
				match={props.match.path}
			>
				<i className="fa fa-users text-green" />
				<span>Пользователи</span>
			</SidebarLink>
		</li>)

	return (
		<ul className="sidebar-menu tree">
			<li className="header"><span><span>Админ меню</span></span></li>
			{isUserView ? intoBack : users}
			<li>
				<a
					href="https://backend.101kurs.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i className="fa fa-cogs text-green" />
					<span>Бэкенд</span>
				</a>
			</li>
		</ul>
	)

}

CourseAdminMenu.propTypes = {
	isUserViewCourse: PropTypes.string,
	match: PropTypes.object,
	back: PropTypes.func,
	onLink: PropTypes.func
}

export default menuDecorator(CourseAdminMenu, { menuId: 'admin' })
