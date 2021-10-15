import React, { Component } from 'react';
import MenuTab from './MenuTab.js'

class App extends Component {
    constructor() {
        super()
        this.state = {
            restItemAPIData: {}
        }
    }

    componentDidMount() {
    }

    render() {

        return (
            <body class="d-flex flex-column h-100">
                <header className="header bg-dark text-center" style={{ fontFamily: "Varela Round" }}>
                    <a href="https://www.google.com/maps/space/moon/@9.5572997,-19.9874672,546760m/data=!3m1!1e3"
                        className="text-decoration-none text-light d-inline me-2"
                        target="_blank"
                        rel="noopener noreferrer"
                    >1000 COPERNICUS CRATER, MOON</a>
                    <a href="tel:1-206-266-1000" className="text-decoration-none text-light d-inline"><small>1.206.266.1000</small></a>
                </header>
                <div className="container text-center mt-5 mb-5">
                    <h1>
                        <div class="d-inline-block tilt" style={{ fontFamily: "Permanent Marker" }}>JEFF BEZOS</div>
                        <div class="d-inline" style={{ fontFamily: "Londrina Outline", fontSize: 30 }}>CAFE</div>
                    </h1>
                    <h6 style={{ fontFamily: "Varela Round" }}>OPEN 24HRS</h6>
                </div>
                <MenuTab />
                <footer className="footer py-3 bg-dark"></footer>
            </body>
        );
    }
}

export default App;
