import '../style/nav.css'
function Navbar() {
    return (
        <div className="nav">
            <a href="#"><div className='logo'></div></a>
            <ul className='nav_type'>
                <a href="#"><li> Home</li></a>
                <a href="#"><li>About us</li></a>
                <a href="#"><li>Servise us</li></a>
                <a href="#"><li>Pages</li></a>
            </ul>
        </div>
    )
}

export default Navbar;