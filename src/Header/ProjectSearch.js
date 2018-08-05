import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class ProjectSearch extends Component {

	constructor() {
		super()

		const initialState = {
			searchRequested: false,
			projectId: null,
			redirect: null
		}

		this.state = { ...initialState }
		this.initialState = { ...initialState }
	}

	componentDidMount() {
		document.addEventListener('click', this.hideMessages, false)
	}

	componentWillReceiveProps(props) {
		const { searchProject } = props
		const { projectId, searchRequested } = this.state

		if (searchRequested && searchProject.data !== undefined) {
			this.setState({ searchRequested: false, projectId: null })
			if (searchProject.data) {
				this.setState({ redirect: `/project/project/view?id=${projectId}` })
			}
		}
	}

	componentDidUpdate() {
		const { redirect } = this.state
		const { pathname, search } = location
		// eslint-disable-next-line react/no-did-update-set-state
		if (!pathname + search !== redirect && redirect) this.setState({ ...this.initialState })
	}

	componentWillUnmount() {
		document.removeEventListener('click', this.hideMessages, false)
	}

	searchHandler = (event) => {
		const id = event.target.elements.input.value
		event.preventDefault()
		this.setState({ searchRequested: true, projectId: id })
		this.props.searchResult(id)
	}

	hideMessages = () => {
		this.setState({ noResult: false })
	}

	render() {
		const { redirect } = this.state
		const { searchProject } = this.props

		return (
			<div className="header-search">
				{redirect ? <Redirect to={redirect} /> : ''}
				<form onSubmit={this.searchHandler}>
					<input
						className="form-control"
						name="input"
						placeholder="Найти проект по ID"
					/>
				</form>
				{searchProject.message && searchProject.serverStatus === 100 ?
					<div className="header-search-message">{searchProject.message}</div>
					: ''}
			</div>
		)
	}
}

ProjectSearch.propTypes = {
	isAuthorized: PropTypes.bool,
	searchResult: PropTypes.func,
	searchProject: PropTypes.object
}

export default ProjectSearch

