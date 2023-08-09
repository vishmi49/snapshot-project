import { Link } from 'react-router-dom';

import './button-nav.styles.scss'


const ButtonNav = () => {
  
    return (
        <div className="button-nav">
         
            <Link to="/mountains">
            <button className="button-nav-link">Mountains</button>
            </Link>

            <Link to="/beaches">
            <button className="button-nav-link">Beaches</button>
            </Link>

            <Link to="/birds">
            <button className="button-nav-link">Birds</button>
            </Link>

            <Link to="/foods">
            <button className="button-nav-link">Foods</button>
            </Link>
        </div>
    )


}

export default ButtonNav;