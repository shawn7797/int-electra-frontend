import React from "react";
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from "react-router-dom";
import TeamRoute from "routes/team-route/team.route";
import About from "./About";
import ContactUs from "./ContactUs";
import LandingPage from "./LandingPage";
import Projects from "./Projects";
import Service from "./Service";
import Testimonials from "./Testimonials";

const Container = () => {
    return (
        <div className="container-wrapper" style={{ marginTop: "-8vw" }}>
            <Router>
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/services" component={Service} />
                    <Route exact path="/team" component={TeamRoute} />
                    <Route exact path="/contactUs" component={ContactUs} />
                </Switch>
            </Router>
        </div>
    );
};

export default Container;
