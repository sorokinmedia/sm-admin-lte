import PropTypes from 'prop-types'
import React from 'react'
import menuDecorator from '../menuDecorator'
import SidebarLink from '../SidebarLink/index'

function CourseLearnerMenu(props) {


	return (
		<ul className="sidebar-menu tree">
			<li className="header"><span><span>Меню ученика </span></span></li>
			<li>
				<SidebarLink
					to="/learner/course/my"
					onClick={props.onLink}
					match={props.match.path}
				>
					<i className="fa fa-graduation-cap" />
					<span>Мои курсы</span>
				</SidebarLink>
			</li>
			<li>
				<SidebarLink
					to="/learner/product/index"
					onClick={props.onLink}
					match={props.match.path}
				>
					<i className="fa fa-book" />
					<span>Список курсов</span>
					{props.courseCount
						? (
							<span className="pull-right-container">
								<small className="label pull-right bg-primary">{props.courseCount}</small>
							</span>)
						: ''}
				</SidebarLink>
			</li>
		</ul>
	)

}

CourseLearnerMenu.propTypes = {
	isUserViewCourse: PropTypes.bool,
	match: PropTypes.object,
	courseCount: PropTypes.number,
	back: PropTypes.func,
	onLink: PropTypes.func
}

export default menuDecorator(CourseLearnerMenu, { menuId: 'admin' })
