import React from 'react';
import {Link} from "react-router-dom";



const NavBar = props => {
    
    return (

        <div style={{height: '10%'}}>
    {/* <Layout fixedHeader> */}
        <Header className="header" title={ <span><SvgLogo className='logo'/></span>}>
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/">About</Link>
                <Link to="/">Contact</Link>
                <Link to="/">Settings</Link>
            </Navigation>
        </Header>
        {/* <Drawer title="Title">
            <Navigation>
            <Link to="/">Home</Link>
                <Link to="/">About</Link>
                <Link to="/">Contact</Link>
                <Link to="/">Settings</Link>
            </Navigation>
        </Drawer> */}
    {/* </Layout> */}
</div>
    )
}

export default NavBar;