import React from 'react'

const iconLink = (href, icon, props = {}) => (
	<a href={href} {...props}>
		<i className={icon} />
	</a>)

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

// before user profile
/** @type {Array<MenuItem>} */
export function getMenuItemsBefore({ site, notifications, isAdmin }) {
	return [...(isAdmin ? adminItems(site) : []),
		{
			name: 'notifications',
			dropdown: {
				title: 'Непрочитанных уведомлений ' + notifications,
				icon: 'fa fa-bell-o',
				count: notifications,
				countIcon: 'label label-warning',
				items: [{
					title: 'Все уведомления',
					href: '/notificator/default/index',
					icon: 'fa fa-envelope-o text-green'
				}, {
					title: 'Настройка уведомлений',
					href: '/user/profile/notifications',
					icon: 'fa fa-sliders text-green'
				}],
				name: 'notifications'
			}
		},
		site === 'course' && {
			name: 'billing',
			dropdown: {
				icon: 'fa fa-dollar',
				items: [{
					title: 'Ваш счет',
					href: '/billing',
					icon: 'fa fa-money text-green'
				}],
				name: 'billing'
			}
		}
	]
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
