import PropTypes from 'prop-types'
import React from 'react'
import { NavLink } from 'react-router-dom'
import menuDecorator from './menuDecorator'

function AnalyticToolsMenu(props) {
	return (
		<ul
			className="sidebar-menu tree"
		>
			<li className="header">Интсрументы</li>
			<li>
				<NavLink to="/sites/site/find-semantic-item" onClick={props.onLink}>
					<i className="fa fa-table text-green" />
					<span>Найти блок семантики</span>
				</NavLink>
			</li>
			<li>
				<NavLink to="/project/default/find-project" onClick={props.onLink}>
					<i className="fa fa-product-hunt text-green" />
					<span>Найти проект по WHO</span>
				</NavLink>
			</li>
			<li>
				<NavLink to="/project/default/find-project-by-name" onClick={props.onLink}>
					<i className="fa fa-product-hunt text-green" />
					<span>Найти проект по названию</span>
				</NavLink>
			</li>
		</ul>)
}

AnalyticToolsMenu.propTypes = { onLink: PropTypes.func }

export default menuDecorator(AnalyticToolsMenu, { menuId: 'analytic_tools' })
