import React from 'react'
import NavBar from './NavBar'
import Search from './Search'

type Props = {}

const Header = (props: Props) => {
    return (
        <div>
            <header>
                <div className="logo text-center" >
                    <img src="https://picsum.photos/200/100" alt="" />

                </div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                           <NavBar/>
                           <Search/>
                        </div>
                    </div>
                </nav>

            </header>

        </div>
    )
}

export default Header