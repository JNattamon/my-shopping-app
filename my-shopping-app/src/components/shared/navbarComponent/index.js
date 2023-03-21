import React from "react";
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import * as constants from '../../../constants/navbarConst';

class NavbarComponent extends React.Component {

    render() {
        return (
            <Menu>
                {constants.MENU_LIST.map((m, index) => (
                    <Menu.Item
                        header
                        as={Link} exact="true"
                        to={m.redirect_path}
                        key={index}
                        children={m.display_name}
                    />
                ))}
            </Menu>
        )
    }
}

export default NavbarComponent;