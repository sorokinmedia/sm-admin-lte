import PropTypes from 'prop-types'
import React, { Component } from 'react'
import sorokinImg from './assets/sorokin.png'
import Footer from './Footer/index'
import Header from './Header/index'
import { getMenuItemsAfter, getMenuItemsBefore } from './menu'
import Sidebar from './Sidebar/index'
import SidebarRight from './SidebarRight/index'

export default class AppWrapper extends Component {

	handleClick = (ev) => {
		document.querySelector('[data-toggle="control-sidebar"]')
			.click()
	}

	render() {
		const {
			userData, match, site, header, footer, sidebar, sidebarRight
		} = this.props

		const { data = {} } = userData
		const { error } = userData

		const {
			notifications,
			avatar = 'http://www.gravatar.com/avatar/dc36f5a91f271af325184ece55b5dbd5?r=g&s=45',
			username
		} = data

		const isAdmin = data.role === 'Администратор'
		// before user profile
		const menuItemsBefore = getMenuItemsBefore({ site, notifications, isAdmin })
		// after user profile
		const menuItemsAfter = getMenuItemsAfter()
		const headerClassName = 'class-name'

		return (
			<div className={`app-wrapper ${this.props.wrapClass}`}>
				<div className="wrapper" style={{ height: 'auto', minHeight: '100%' }}>
					<Header
						avatar={avatar}
						className={headerClassName}
						setup={header}
						site={site}
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
						isShow={sidebar}
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
						isShow={footer}
					>
						<div className="pull-left">
							<div className="ft_copy">© Sorokin.Media 2017-2018</div>
						</div>
						<div className="pull-right">
							<div className="ft_logo">
								<img src={sorokinImg} alt="Cabinet" />
							</div>
						</div>
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
	site: PropTypes.string,
	wrapClass: PropTypes.string,
	children: PropTypes.node,
	courseMenu: PropTypes.bool,
	header: PropTypes.object,
	sidebar: PropTypes.bool,
	sidebarRight: PropTypes.bool,
	footer: PropTypes.bool,
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
	footer: false
}
