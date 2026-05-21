const Navbar =() =>{
    return (
        <nav className="navbar">
            <div className="container py-4 flex justify-between items-center">
                {/*Logo*/}

                <h1 className="text-2xl font-bold">
                    <span className="text-cyan-400">Aakash</span>
                </h1>
                
                <ul className="nav-links">
                    <li className="nav-item">Home</li>
                    <li className="nav-item">About</li>
                    <li className="nav-item">Projects</li>
                    <li className="nav-item">Contact</li>
                </ul>

                <button className="btn-primary">Resume</button>
                
            </div>
        </nav>
    )
}

export default Navbar;