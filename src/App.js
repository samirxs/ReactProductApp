import React from "react";
// import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
// import CounterExample from "./Components/CounterExample";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Views/Home";
import About from "./Views/About";
import Product from "./Views/Product";

function App() {
    return (
        <div className="relative pb-10 min-h-screen">
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/products/:id">
                        <Product />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
