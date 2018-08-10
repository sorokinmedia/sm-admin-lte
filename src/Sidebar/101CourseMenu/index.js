import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import CourseAdminMenu from './CourseAdminMenu'
import CourseLearnerMenu from './CourseLearnerMenu'
import CourseSupportMenu from './CourseSupportMenu'

function CourseMenu({ isUserViewCourse, leftMenu, match, onLink, back, sidebar }) {
	return (
		<Fragment>
			<CourseAdminMenu
				isUserViewCourse={isUserViewCourse}
				menus={leftMenu.data.menus}
				match={match}
				onLink={onLink}
				back={back}
			/>
			<CourseSupportMenu
				menus={leftMenu.data.menus}
				match={match}
				onLink={onLink}
			/>
			<CourseLearnerMenu
				courseCount={sidebar.courseCount}
				myCourseCount={sidebar.myCourseCount}
				menus={leftMenu.data.menus}
				match={match}
				onLink={onLink}
			/>
		</Fragment>)
}

CourseMenu.propTypes = {
	leftMenu: PropTypes.object.isRequired,
	onLink: PropTypes.func.isRequired,
	back: PropTypes.func.isRequired,
	match: PropTypes.object.isRequired,
	isUserViewCourse: PropTypes.string,
	sidebar: PropTypes.shape({
		courseCount: PropTypes.number,
		myCourseCount: PropTypes.number
	})
}
CourseMenu.defaultProps = {}

export default CourseMenu
