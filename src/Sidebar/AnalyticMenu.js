import PropTypes from 'prop-types'
import React from 'react'
import { NavLink } from 'react-router-dom'
import menuDecorator from './menuDecorator'

function AnalyticMenu(props) {
	return (
		<ul
			className="sidebar-menu tree"
		>
			<li className="header">Основное меню</li>
			<li>
				<NavLink to="/" onClick={props.onLink}>
					<i className="fa fa-home text-green" />
					<span className="main-link">Главная</span>
				</NavLink>
			</li>
			<li>
				<NavLink to="/sites/site/index" onClick={props.onLink}>
					<i className="fa fa-sitemap text-green" />
					<span>Рабочие сайты </span>
				</NavLink>
			</li>
			<li>
				<NavLink to="/project/default/index" onClick={props.onLink}>
					<i className="fa fa-dashboard text-green" />
					<span>Все проекты</span>
				</NavLink>
			</li>
		</ul>)
}

AnalyticMenu.propTypes = { onLink: PropTypes.func }

export default menuDecorator(AnalyticMenu, { menuId: 'analytic' })
