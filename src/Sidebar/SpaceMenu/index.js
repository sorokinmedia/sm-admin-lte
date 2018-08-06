import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import AdminMenu from './AdminMenu'
import AnalyticMenu from './AnalyticMenu'
import AnalyticToolsMenu from './AnalyticToolsMenu'

import ManagerMenu from './ManagerMenu'
import MonetizerMenu from './MonetizerMenu'

function SpaceMenu({ leftMenu, match, onLink }) {
	return (
		<Fragment>
			<AdminMenu
				menus={leftMenu.data.menus}
				onLink={onLink}
				match={match}
			/>
			<AnalyticMenu
				menus={leftMenu.data.menus}
				onLink={onLink}
				match={match}
			/>
			<AnalyticToolsMenu
				menus={leftMenu.data.menus}
				onLink={onLink}
				match={match}
			/>
			<ManagerMenu
				menus={leftMenu.data.menus}
				sites={leftMenu.data.sites}
				onLink={onLink}
				match={match}
			/>
			<MonetizerMenu
				menus={leftMenu.data.menus}
				onLink={onLink}
				match={match}
			/>
		</Fragment>
	)
}

SpaceMenu.propTypes = {
	leftMenu: PropTypes.object.isRequired,
	onLink: PropTypes.func.isRequired,
	match: PropTypes.object.isRequired
}
SpaceMenu.defaultProps = {}

export default SpaceMenu
