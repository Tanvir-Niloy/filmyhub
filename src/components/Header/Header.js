import './Header.css'

function Header() {
    return (
        <div className='header' onClick={()=>window.scroll(0,0)}>
            🎬 Filmy Hub 🎥
        </div>
    )
}

export default Header
