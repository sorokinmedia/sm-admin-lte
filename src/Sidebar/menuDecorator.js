import React from 'react'

export default (CustomComponent, defaultState) => class DecoratedComponent extends React.Component {
	render() {
		const { menus } = this.props
		const { menuId } = defaultState
		const show = menus.includes(menuId)
		return show ? <CustomComponent {...this.props} /> : null
	}
}
