import React from 'react'
import { Link } from 'react-router-dom'

export default function HeaderAuth(props) {
	return (
		<ul className="nav navbar-nav">
			<li><Link to="/auth/login">Войти</Link></li>
			<li><Link to="/auth/signup">Регистрация</Link></li>
		</ul>)
}
