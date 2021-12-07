import React from 'react'
import '../assets/style.css'

const Header = () => {
    return (
        <div class="top">
            <div class="card cover-container d-flex h-100 pt-3 pb-3 ps-4 mx-auto flex-column">
                <header >
                    <div >
                        <nav class="nav">
                            <div className="font-monospace"><div class="nav-space"><a>ALL TYPES <i class="fas fa-chevron-down"></i></a></div> </div>
                            <div class="nav-item-active"><a>Popular Products</a> </div>
                            <div class="nav-item"><a> Low Price High</a> </div>
                            <div class="nav-item"><a><div class="nav-space2"><a>High Price</a> </div></a> </div>
                            <div className="font-monospace"><div class="nav-end"><a> PRICE <i class="fas fa-chevron-down"></i></a></div></div>
                        </nav>

                    </div>

                </header>
            </div>
        </div>

    )
}

export default Header
