import React, { Component } from "react";
import Navbar from "./components/Navbar";
import NewsComponent from "./components/NewsComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFoundPage from "./components/NotFound";
export default class App extends Component {
  ApiKey = process.env.REACT_APP_NEWS_APIKEY2;
  state = { curMode: "light", color: "white" };
  changeMode = (mode) => {
    if (mode === "dark") {
      this.setState({ curMode: mode, color: "black" });
    } else {
      this.setState({ curMode: mode, color: "white" });
    }
  };
  render() {
    const { curMode, color } = this.state;
    return (
      <div className="App" style={{ backgroundColor: color }}>
        {/* {console.log(this.state.curMode)} */}
        <Router>
          <Navbar mode={curMode} changeMode={this.changeMode}></Navbar>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <NewsComponent
                  mode={curMode}
                  apiKey={this.ApiKey}
                  key="general"
                  category="general"
                  country="in"
                ></NewsComponent>
              }
            />
            <Route
              exact
              path="/general"
              element={
                <NewsComponent
                  mode={curMode}
                  apiKey={this.ApiKey}
                  key="general"
                  category="general"
                  country="in"
                ></NewsComponent>
              }
            />
            <Route
              exact
              path="/business"
              element={
                <NewsComponent
                  mode={curMode}
                  apiKey={this.ApiKey}
                  key="business"
                  category="business"
                  country="in"
                ></NewsComponent>
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <NewsComponent
                  mode={curMode}
                  apiKey={this.ApiKey}
                  key="entertainment"
                  category="entertainment"
                  country="in"
                ></NewsComponent>
              }
            />
            <Route
              exact
              path="/health"
              element={
                <NewsComponent
                  mode={curMode}
                  apiKey={this.ApiKey}
                  key="health"
                  category="health"
                  country="in"
                ></NewsComponent>
              }
            />
            <Route
              exact
              path="/science"
              element={
                <NewsComponent
                  mode={curMode}
                  apiKey={this.ApiKey}
                  key="science"
                  category="science"
                  country="in"
                ></NewsComponent>
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <NewsComponent
                  mode={curMode}
                  apiKey={this.ApiKey}
                  key="sports"
                  category="sports"
                  country="in"
                ></NewsComponent>
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <NewsComponent
                  mode={curMode}
                  apiKey={this.ApiKey}
                  key="technology"
                  category="technology"
                  country="in"
                ></NewsComponent>
              }
            />
            <Route
              path="*"
              apiKey={this.ApiKey}
              element={
                <NotFoundPage
                  key={"error-page"}
                  mode={this.state.curMode}
                ></NotFoundPage>
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
