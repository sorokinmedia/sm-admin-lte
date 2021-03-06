import React from 'react'
import { Link } from 'react-router-dom'

const iconLink = (href, icon, props = {}) => (
	<a href={href} {...props}>
		<i className={icon} />
	</a>)

const LinkRouter = (href, icon, props = {}) => (
	<Link
		to={href}
		{...props}
	>
		<i className={icon} />
	</Link>
)

/**
 * @typedef MenuItem
 *
 * @property {string} name
 * @property {Function} [render] -- render or dropdown must be specified
 * @property {DropdownData} [dropdown] -- if specified - dropdown applies
 */

/**
 * @typedef DropdownData
 *
 * @property {string} title
 * @property {string} icon
 * @property {name} string
 * @property {number} [count]
 * @property {string} [countIcon]
 * @property {Array<DropdownDataItem>} items
 */

/**
 * @typedef DropdownDataItem
 *
 * @property {string} title
 * @property {string} href
 * @property {string} icon
 */

function adminItems(site) {
	return [{
		name: 'userlist',
		render: () => iconLink('/user/default/index', 'fa fa-users text-black')
	}, {
		name: 'backend',
		render: () => iconLink(
			site !== 'course' ? 'http://backend.sorokin.kosmoz.online' : '',
			'fa fa-cogs text-black'
		)
	}]
}

function supportItems() {
	return [{
		name: 'billing',
		render: () => LinkRouter('/billing/default/index#orders', 'fa fa-dollar')
	}]
}

// before user profile
/** @type {Array<MenuItem>} */
export function getMenuItemsBefore({
	notifications,
	role,
	header: {
		site,
		links: { all = '/notificator/default/index', setup = '/user/profile/notifications' }
	},
	is_support
}) {
	const admin = role === 'Администратор'
	const menuList = [
		{
			name: 'notifications',
			dropdown: {
				title: 'Непрочитанных уведомлений ' + notifications,
				icon: 'fa fa-bell-o',
				count: notifications ? notifications : '',
				countIcon: notifications ? 'label label-warning' : '',
				items: [{
					title: 'Все уведомления',
					href: all,
					icon: 'fa fa-envelope-o text-green'
				}, {
					title: 'Настройка уведомлений',
					href: setup,
					icon: 'fa fa-sliders text-green'
				}],
				name: 'notifications'
			}
		},
		{
			name: 'billing',
			site: 'course',
			dropdown: {
				icon: 'fa fa-dollar',
				items: [{
					title: 'Ваш счет',
					href: '/billing',
					icon: 'fa fa-money text-green'
				}],
				name: 'billing'
			}
		}]
	const filtered = menuList.filter(elem => elem.site !== site)
	return [...(admin ? adminItems(site) : []), ...(is_support
		? supportItems()
		: ''), ...filtered]

}

// after user profile
export function getMenuItemsAfter() {
	return [{
		name: 'support',
		dropdown: {
			title: 'Тех. поддержка',
			icon: 'fa fa-question-circle-o',
			items: [{
				href: '/user/ticket/index',
				title: 'Мои тикеты'
			}],
			name: 'support'
		}
	}, {
		name: 'folders',
		render: () => iconLink('#', 'fa fa-gears', { 'data-toggle': 'control-sidebar' })
	}]
}
