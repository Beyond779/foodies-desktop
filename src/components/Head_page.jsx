import '../style/head.css'
import Navbar from '../components/Navbar';
function Head() {
    return (
        <div className="head_page">
            <Navbar />
            <div className='woman_image'></div>
            <div className='h_h_text'><h1>We're Serious For Food.</h1></div>
            <div className='p_h_text'>
                <p>We strive to provide a space where guests can connect with themselves and explore their full potential, offering a safe place.</p>
            </div>
            <a href="#"><button className='h_button'></button></a>
        </div>
    )
}

export default Head;