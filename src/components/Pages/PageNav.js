import React, {useState} from 'react';
import {NavLink as Link} from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	NavbarText,
} from 'reactstrap';

import styles from './Page.module.scss';

function PageNav() {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);

	return (
		<Navbar light expand='md' className={styles.customNavbar}>
			<NavbarBrand tag={Link} to='/' className={styles.customNavbarBrand}>
				Admin
			</NavbarBrand>
			<NavbarToggler onClick={toggle} />
			<Collapse isOpen={isOpen} navbar>
				<Nav className='ms-auto' navbar>
					<NavItem className={styles.navItemRight}>
						<NavLink tag={Link} to='/users' className={styles.navLink}>
							Users
						</NavLink>	
					</NavItem>	
				</Nav>
				<NavbarText className={styles.leftbutton}>
					<i className="bi bi-person" style={{ marginRight: '8px' }}></i> {/* Person icon */}
					MADE BY SHAY MARASIGAN
				</NavbarText>
			</Collapse>
		</Navbar>
	);
}

export default PageNav;
