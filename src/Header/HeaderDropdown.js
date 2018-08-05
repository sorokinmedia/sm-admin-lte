import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'

export default function HeaderDropdown(props) {
	const { items, title, icon, name, count, countIcon } = props
	return (
		<li className="notifications-menu dropdown">
			<a href="#" className="dropdown-toggle" data-toggle="dropdown" id={name}>
				<i className={icon} title={title} />
				{count !== undefined &&
				<span className={countIcon}>
					{count}
				</span>}
			</a>
			<ul className="dropdown-menu" aria-labelledby={name}>
				{/* {title && <li className="header dropdown-header">{title}</li>} */}
				<li>
					<ul className="menu">
						{items.map(({ href, title: itemsTitle, icon: itemsIcon }) => (
							<li key={href}>
								<Link to={href}>
									{itemsIcon && <i className={itemsIcon} />}
									{itemsTitle}
								</Link>
							</li>
						))}
					</ul>
				</li>
			</ul>
		</li>)
}

HeaderDropdown.propTypes = {
	items: PropTypes.array.isRequired,
	title: PropTypes.string,
	icon: PropTypes.string.isRequired,
	name: PropTypes.string,
	count: PropTypes.number,
	countIcon: PropTypes.string
}
