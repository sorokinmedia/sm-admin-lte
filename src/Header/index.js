import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import HeaderAuth from './HeaderAuth'
import HeaderDropdown from './HeaderDropdown'
import HeaderUserProfile from './HeaderUserProfile'
import ProjectSearch from './ProjectSearch'

// const logoPath = location.hostname === 'localhost' ? '/build' : '/img'

export default class Header extends Component {
	static propTypes = {
		menuItemsAfter: PropTypes.array,
		menuItemsBefore: PropTypes.array,
		setup: PropTypes.object,
		searchResult: PropTypes.func,
		logout: PropTypes.func,
		searchProject: PropTypes.object,
		userName: PropTypes.string,
		avatar: PropTypes.string,
		className: PropTypes.string,
		isAuthorized: PropTypes.bool
	}

	constructor(props) {
		super(props)
		this.state = {}
	}

	handleLogout = (ev) => {
		ev.preventDefault()
		this.props.logout()
	}

	renderHeaderItems = list => (
		list.map(({ name, render, className, dropdown }) => {
			if (dropdown) {
				return <HeaderDropdown {...dropdown} key={name} />
			}
			return (
				<li key={name} className={className}>
					{render()}
				</li>)
		})
	)

	render() {
		const { isShow, site, search, dropdown, logo, logoMini, userProfileLink } = this.props.setup
		if (!isShow) return null
		const {
			menuItemsAfter = [],
			menuItemsBefore = [],
			userName,
			avatar,
			className,
			isAuthorized
		} = this.props

		return (
			<header className={`main-header ${className}`}>
				<Link to="/" className="logo">
					<span className="logo-mini">
						<img src={logoMini} alt="Cabinet" />
					</span>
					<span className="logo-lg">
						<img src={logo} alt="Cabinet" id="logo" />
					</span>
				</Link>
				<nav className="navbar navbar-static-top">
					<a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
						<span className="sr-only">Toggle navigation</span>
					</a>
					{isAuthorized && search
						? <ProjectSearch
							searchResult={this.props.searchResult}
							searchProject={this.props.searchProject}
						/>
						: ''}
					<div className="navbar-custom-menu pull-right">
						{isAuthorized
							? (
								<ul className="nav navbar-nav">
									{this.renderHeaderItems(menuItemsBefore)}
									<HeaderUserProfile
										userName={userName}
										avatar={avatar}
										handleLogout={this.handleLogout}
										userProfileLink={userProfileLink}
									/>
									{dropdown && this.renderHeaderItems(menuItemsAfter)}
								</ul>)
							: <HeaderAuth />}
					</div>
				</nav>
			</header>)
	}
}
