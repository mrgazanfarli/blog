import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/preloader.css'

import Home from './Home';
import PostList from './PostList';
import PostCreator from './PostCreator';
import PostDetails from './PostDetails';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                <Link to="/" className="navbar-brand">Home</Link>
                                <div className="collapse navbar-collapse">
                                    <ul className="navbar-nav mr-auto">
                                        <li className="nav-item">
                                            <Link to="/posts" className="nav-link">Posts</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/add-post" className="nav-link">Create post</Link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                    <Switch>
                        <Route exact path="/">
                            <div className="row">
                                <div className="col-11">
                                    <Home />
                                </div>
                            </div>
                        </Route>
                        <Route exact path="/posts">
                            <div className="row mt-4 justify-content-center">
                                <div className="col-11">
                                    <h3 className="text-center mb-3 text-info">Posts</h3>
                                    <PostList />
                                </div>
                            </div>
                        </Route>
                        <Route path="/add-post">
                            <div className="row mt-4 justify-content-center">
                                <div className="col-11">
                                    <PostCreator />
                                </div>
                            </div>
                        </Route>
                        <Route path="/posts/:postId/details">
                            <div className="row mt-4 justify-content-center">
                                <div className="col-11">
                                    <PostDetails />
                                </div>
                            </div>
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App;