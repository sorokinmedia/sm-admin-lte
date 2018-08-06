import PropTypes from 'prop-types'
import React from 'react'
import { NavLink } from 'react-router-dom'
import menuDecorator from '../menuDecorator'

function ManagerMenu(props) {
	const { sites } = props

	return (
		<ul
			className="sidebar-menu tree"
		>
			<li className="header">Меню руководителя</li>
			<li>
				<NavLink to="/manager/costs" onClick={props.onLink}>
					<i className="fa fa-money text-aqua" />
					<span>ЗП аналитики</span>
				</NavLink>
			</li>
			<li>
				<NavLink to="/manager/project/index" onClick={props.onLink}>
					<i className="fa fa-line-chart text-green" />
					<span>Общие данные</span>
				</NavLink>
			</li>
			{sites ?
				<ul
					className="sidebar-menu tree"
				>
					{sites.map(elem => (<li key={elem.id}>
						<NavLink
							to={`/manager/project/single?site_id=${elem.id}`}
							onClick={props.onLink}
						>
							<i className="fa fa-globe text-green" />
							<span>{elem.name}</span>
						</NavLink>
					</li>))}
				</ul>
				: ''}
		</ul>)
}

ManagerMenu.propTypes = { sites: PropTypes.array, onLink: PropTypes.func }

export default menuDecorator(ManagerMenu, { menuId: 'manager' })
