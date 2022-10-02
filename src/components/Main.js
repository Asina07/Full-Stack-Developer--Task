import React from 'react';
import {BrowserRouter, Route, Routes,Link} from 'react-router-dom'
import AddCars from './AddCars';
import AllCars from './AllCars';
import AuctionListCars from './AuctionListCars';
import Authentication from './Authentication';



function Main() {
  return (
    <div>
        <BrowserRouter>
            <header>
          
                <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="login">Login</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="AddCars">AddCars</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="AllCars">AllCars</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="ListCars">Auction</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                
            </header>
           
            <Routes>
                
                    <Route path='login' element={<Authentication/>}/>
                    <Route path='AddCars' element={<AddCars/>}/>
                    <Route path='AllCars' element={<AllCars/>}/>
                    <Route path='ListCars' element={<AuctionListCars/>}/>
                
            </Routes>
           
        </BrowserRouter>
      </div>
  )
}

export default Main