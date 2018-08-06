import PropTypes from 'prop-types'
import React from 'react'
import { NavLink } from 'react-router-dom'
import menuDecorator from '../menuDecorator'

function MonetizerMenu(props) {
	return (
		<ul
			className="sidebar-menu tree"
		>
			<li className="header">Меню монетизатора</li>
			<li>
				<NavLink to="/ads" onClick={props.onLink}>
					<i className="fa fa-object-ungroup text-blue" />
					<span>Работа с рекламой</span>
				</NavLink>
			</li>
		</ul>)
}

MonetizerMenu.propTypes = { onLink: PropTypes.func }

export default menuDecorator(MonetizerMenu, { menuId: 'monetizer' })
