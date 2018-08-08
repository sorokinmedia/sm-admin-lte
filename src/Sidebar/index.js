import { get } from 'lodash'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { getCookie } from '../helpers/CookieHelper'
import CourseMenu from './101CourseMenu'
import SpaceMenu from './SpaceMenu'

export default class Sidebar extends Component {
	static displayName = 'Sidebar'

	constructor(props) {
		super(props)
		this.asideRef = React.createRef()
	}

	componentDidUpdate() {
		if (this.asideRef) {
			const sideHeight = this.asideRef.clientHeight
			document.querySelector('.content-wrapper').style.minHeight = sideHeight + 'px'
		}
	}

	onLink = () => {
		document.documentElement.scrollTop = 0
	}

	menu = () => {
		const { leftMenu, sidebar, match, back } = this.props
		const isUserViewCourse = getCookie('auth_token')
		switch (sidebar.menu) {
			case 'course':
				return (
					<CourseMenu
						onLink={this.onLink}
						match={match}
						back={back}
						isUserViewCourse={isUserViewCourse}
						leftMenu={leftMenu}
					/>)
			case 'space':
				return (
					<SpaceMenu
						leftMenu={leftMenu}
						match={match}
						onLink={this.onLink}
					/>)
			default:
				return <div>default</div>
		}
	}

	render() {
		if (!this.props.sidebar.isShow) return null
		const { avatar, userName, leftMenu } = this.props
		const isUserView = getCookie('auth_token_main')
		if (!get(leftMenu, 'data')) return null

		return (
			<aside
				className="main-sidebar"
				ref={this.asideRef}
			>
				<section className="sidebar">
					<div className="user-panel" style={{ color: '#fff' }}>
						<div className="pull-left image">
							<img src={avatar} className="img-circle" alt={userName} />
						</div>
						<div className="pull-left info">
							<p>{userName}</p>
							<a href="#"><i className="fa fa-circle text-success" />Online</a>
						</div>
					</div>
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
					{this.menu()}
				</section>
			</aside>)
	}
}

Sidebar.propTypes = {
	avatar: PropTypes.string,
	site: PropTypes.string,
	back: PropTypes.func,
	leftMenu: PropTypes.object,
	sidebar: PropTypes.shape({
		isShow: PropTypes.bool,
		menu: PropTypes.string
	}),
	match: PropTypes.object,
	userName: PropTypes.string
}
