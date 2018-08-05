import { get } from 'lodash'
import PropTypes from 'prop-types'
import React, { Component, Fragment } from 'react'
import { getCookie } from '../helpers/CookieHelper'
import CourseLearnerMenu from './101CourseMenu/CourseLearnerMenu'
import CourseSupportMenu from './101CourseMenu/CourseSupportMenu'
import AdminMenu from './AdminMenu'
import AnalyticMenu from './AnalyticMenu'
import AnalyticToolsMenu from './AnalyticToolsMenu'
import CourseAdminMenu from './101CourseMenu/CourseAdminMenu'
import ManagerMenu from './ManagerMenu'
import MonetizerMenu from './MonetizerMenu'

class Sidebar extends Component {

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

	render() {
		if (!this.props.isShow) return null
		const { avatar, userName, leftMenu, match } = this.props
		const isUserView = getCookie('auth_token_main')
		const isUserViewCourse = getCookie('auth_token')
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
					{this.props.courseMenu
						? (
							<Fragment>
								<CourseAdminMenu
									isUserViewCourse={isUserViewCourse}
									menus={leftMenu.data.menus}
									match={match}
									onLink={this.onLink}
									back={this.props.back}
								/>
								<CourseSupportMenu
									menus={leftMenu.data.menus}
									match={match}
									onLink={this.onLink}
								/>
								<CourseLearnerMenu
									menus={leftMenu.data.menus}
									match={match}
									onLink={this.onLink}
								/>
							</Fragment>) : ''}
					{this.props.space
						?
						(
							<Fragment>
								<AdminMenu
									menus={leftMenu.data.menus}
									onLink={this.onLink}
									match={match}
								/>
								<AnalyticMenu
									menus={leftMenu.data.menus}
									onLink={this.onLink}
									match={match}
								/>
								<AnalyticToolsMenu
									menus={leftMenu.data.menus}
									onLink={this.onLink}
									match={match}
								/>
								<ManagerMenu
									menus={leftMenu.data.menus}
									sites={leftMenu.data.sites}
									onLink={this.onLink}
									match={match}
								/>
								<MonetizerMenu
									menus={leftMenu.data.menus}
									onLink={this.onLink}
									match={match}
								/>
							</Fragment>
						)
						: ''}

				</section>
			</aside>)
	}
}

Sidebar.propTypes = {
	avatar: PropTypes.string,
	site: PropTypes.string,
	back: PropTypes.func,
	leftMenu: PropTypes.object,
	match: PropTypes.object,
	courseMenu: PropTypes.bool,
	space: PropTypes.bool,
	isShow: PropTypes.bool,
	userName: PropTypes.string
}

export default Sidebar

