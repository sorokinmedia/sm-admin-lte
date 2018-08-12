import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import { getCookie } from '../../helpers/CookieHelper'
import menuDecorator from '../menuDecorator'
import SidebarLink from '../SidebarLink/index'

function AdminMenu(props) {
	const isUserView = getCookie('auth_token_main')
	return (
		<Fragment>
			{isUserView
				? (
					<ul className="sidebar-menu tree">
						<li>
							<a
								className="hovered"
								onClick={() => this.props.back()}
							>
								<i className="fa fa-undo text-green" />
								<span>Вернуться в основного</span>
							</a>
						</li>
					</ul>)
				: ''}
			<ul
				className="sidebar-menu tree"
			>
				<li className="header">Админ меню</li>
				<li>
					<a
						href="https://backend.sorokin.space"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fa fa-cogs text-green" />
						<span>Бэкенд</span>
					</a>
				</li>
				<li>
					<SidebarLink
						to="/user/default/index"
						onClick={props.onLink}
						match={props.match.path}
					>
						<i className="fa fa-users text-green" />
						<span>Пользователи</span>
					</SidebarLink>
				</li>
			</ul>
		</Fragment>
	)
}

AdminMenu.propTypes = { match: PropTypes.object, onLink: PropTypes.func }

export default menuDecorator(AdminMenu, { menuId: 'admin' })
