import Menu from './Menu.js';

function MenuTab() {
        return (
            <div className="container">
                <nav>
                    <div className="nav nav-tabs justify-content-center" id="nav-tab" role="tablist" style={{ fontFamily: "Varela Round" }}>
                        <button className="nav-link text-dark" id="nav-breakfast-tab" data-bs-toggle="tab" data-bs-target="#nav-breakfast" type="button" role="tab" aria-controls="nav-breakfast" aria-selected="true">breakfast</button>
                        <button className="nav-link active text-dark" id="nav-appetizers-tab" data-bs-toggle="tab" data-bs-target="#nav-appetizers" type="button" role="tab" aria-controls="nav-appetizers" aria-selected="false">appetizers</button>
                        <button className="nav-link text-dark" id="nav-lunch-tab" data-bs-toggle="tab" data-bs-target="#nav-lunch" type="button" role="tab" aria-controls="nav-lunch" aria-selected="false">lunch</button>
                        <button className="nav-link text-dark" id="nav-dinner-tab" data-bs-toggle="tab" data-bs-target="#nav-dinner" type="button" role="tab" aria-controls="nav-dinner" aria-selected="false">dinner</button>
                    </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade" id="nav-breakfast" role="tabpanel" aria-labelledby="nav-breakfast-tab">
                        <Menu mealID={1} />
                    </div>
                    <div className="tab-pane fade show active" id="nav-appetizers" role="tabpanel" aria-labelledby="nav-appetizers-tab">
                        <Menu mealID={4} />
                    </div>
                    <div className="tab-pane fade" id="nav-lunch" role="tabpanel" aria-labelledby="nav-lunch-tab">
                        <Menu mealID={3} />
                    </div>
                    <div className="tab-pane fade" id="nav-dinner" role="tabpanel" aria-labelledby="nav-dinner-tab">
                        <Menu mealID={5} />
                    </div>
                </div>
            </div>
        );
    }

export default MenuTab;