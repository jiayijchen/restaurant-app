import React, { Component } from 'react';
import axios from 'axios';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            APIData: {},
            mealIDType: props.mealID
        };
    }

    loadAPI() {
        const restItemURL = "https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/menu/type_amount/" + this.state.mealIDType + "/10";

        axios.get(restItemURL)
            .then(res => {

                this.setState({
                    APIData: res.data
                })
                // console.log(res.data);

            })

            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }

    componentDidMount() {
        this.loadAPI();
    }

    render() {
        const isPopulated = this.state.APIData.length > 0;

        return (
            <div className="row mt-3">
                {isPopulated ?
                    this.state.APIData.map((menuItem) => {
                        return (
                            <div className="col-6 mb-3" key={menuItem.id}>
                                <div className="card border-dark h-100">
                                    <div className="row card-body text-dark">
                                        <h5 className="col-7 card-title">{menuItem.name.toLowerCase()}</h5>
                                        <h5 className="col-5 card-title text-end text-success">${menuItem.id % 4.5 + 2}M <span className="h6">USD</span></h5>
                                        <p className="card-text">{menuItem.description.toLowerCase()}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }) :
                    console.log("Loading data...")
                }
            </div>
        )
    }
}

export default Menu;