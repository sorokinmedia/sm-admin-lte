import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Footer from '../Footer/index'
import Header from '../Header/index'
import { getMenuItemsAfter, getMenuItemsBefore } from './menu'
import Sidebar from '../Sidebar/index'
import SidebarRight from '../SidebarRight/index'
import './style.css'

export default class AppWrapper extends Component {

	handleClick = () => {
		document.querySelector('[data-toggle="control-sidebar"]')
			.click()
	}

	render() {
		const {
			userData, match, header, footer, sidebar, sidebarRight, appWrapper: { style }
		} = this.props

		const { data = {} } = userData
		const { error } = userData

		const {
			notifications,
			avatar = 'https://www.gravatar.com/avatar/dc36f5a91f271af325184ece55b5dbd5?r=g&s=45',
			username,
			is_support,
			jivosite
		} = data

		const { role } = data
		const isAdmin = role === 'Администратор'

		// before user profile
		const menuItemsBefore = getMenuItemsBefore({ notifications, role, header, is_support })
		// after user profile
		const menuItemsAfter = getMenuItemsAfter()
		const headerClassName = 'class-name'
		AppWrapper.displayName = AppWrapper.displayName || AppWrapper.name || 'AppWrapper'
		return (
			<div
				className={`app-wrapper ${this.props.wrapClass}`}
				style={{ style }}
			>
				<div className="wrapper">
					<Header
						avatar={avatar}
						className={headerClassName}
						setup={header}
						logout={this.props.logout}
						menuItemsBefore={menuItemsBefore}
						menuItemsAfter={menuItemsAfter}
						isAuthorized={!error}
						isAdmin={isAdmin}
						searchResult={this.props.searchResult}
						searchProject={this.props.searchProject}
						userName={username}
					/>

					<Sidebar
						sidebar={this.props.sidebar}
						avatar={avatar}
						userName={username}
						match={match}
						back={this.props.backIntoMainUser}
						courseMenu={this.props.courseMenu}
						leftMenu={this.props.leftMenu}
					/>

					<section className="content-wrapper">
						{this.props.children}
					</section>
					<Footer
						isShow={footer.isShow}
					>
						<div className="pull-left">
							<div className="ft_copy">© Sorokin.Media 2017-2018</div>
						</div>
						<div className="pull-right">
							<div className="ft_logo">
								<img src={footer.footerLogo} alt="Cabinet" />
							</div>
						</div>
						{jivosite
							? (
								(function () {
									var widget_id = 'm7KxeJ82jO'
									var d = document
									var w = window

									function l() {
										var s = document.createElement('script')
										s.type = 'text/javascript'
										s.async = true
										s.src = '//code.jivosite.com/script/widget/' + widget_id
										var ss = document.getElementsByTagName('script')[0]
										ss.parentNode.insertBefore(s, ss)
									}

									if (d.readyState == 'complete') {
										l()
									} else {
										if (w.attachEvent) {
											w.attachEvent('onload', l)
										} else {
											w.addEventListener('load', l, false)
										}
									}
								})()
							) : null}
					</Footer>
					<SidebarRight
						handleClick={this.handleClick}
						isShow={sidebarRight}
					/>

					{sidebar && <div className="control-sidebar-bg" />}

				</div>
			</div>)
	}
}

AppWrapper.propTypes = {
	userData: PropTypes.object.isRequired,
	match: PropTypes.object,
	searchProject: PropTypes.object,
	leftMenu: PropTypes.object,
	wrapClass: PropTypes.string,
	children: PropTypes.node,
	courseMenu: PropTypes.bool,
	header: PropTypes.object,
	sidebar: PropTypes.object,
	sidebarRight: PropTypes.bool,
	appWrapper: PropTypes.object,
	footer: PropTypes.shape({
		footerLogo: PropTypes.string,
		isShow: PropTypes.bool
	}),
	backIntoMainUser: PropTypes.func,
	logout: PropTypes.func,
	searchResult: PropTypes.func
}

AppWrapper.defaultProps = {
	searchProject: {},
	wrapClass: '',
	searchResult: () => {
	},
	courseMenu: false,
	header: false,
	sidebar: false,
	sidebarRight: false,
	footer: false,
	appWrapper: {
		style: {
			paddingTop: '15px'
		}
	}
}
