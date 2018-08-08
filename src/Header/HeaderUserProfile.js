import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'

export default function HeaderUserProfile(props) {
	const { userName, avatar } = props

	return (
		<li className="user user-menu dropdown">
			<a href="#" className="dropdown-toggle" data-toggle="dropdown">
				<span className="hidden-xs">{userName}</span>
				<img
					className="user-image"
					src={avatar}
					alt={userName}
				/>
			</a>
			<ul className="dropdown-menu">
				<li className="user-header dropdown-header">
					<img
						className="image-circle"
						src={avatar}
						alt={userName}
					/>
					<p>{userName}</p>
				</li>
				<li className="user-footer dropdown-header">
					<div className="pull-left">
						<Link className="btn btn-default btn-flat" to="/user/profile/index">
							Профиль
						</Link>
					</div>
					<div className="pull-right">
						<a
							className="btn btn-default btn-flat"
							href="/user/default/logout"
							onClick={props.handleLogout}
						>
							Выйти
						</a>
					</div>
				</li>
			</ul>
		</li>)
}


HeaderUserProfile.propTypes = {
	handleLogout: PropTypes.func,
	userName: PropTypes.string,
	avatar: PropTypes.string
}
