import React, { Component } from "react";
import NewsCard from "./NewsCard";
import axios from "axios";
import PropsTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

//News Component
export default class NewsComponent extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loading: true,
      totalResults: 0,
      page: 0,
    };
  }

  // PropTypes a type of validation
  static propsTypes = {
    country: PropsTypes.string,
    category: PropsTypes.string,
  };

  //run after rendering of a component
  componentDidMount() {
    document.title = `${this.props.category}-News`;
    let url = `https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=15`;
    this.fetchData(url);
  }

  //fetch data function
  fetchData = (url) => {
    this.setState({ page: this.state.page + 1 });
    axios
      .get(url)
      .then((response) => {
        // console.log(response);
        this.setState({
          data: response.data.articles,
          loading: false,
          totalResults: response.data.totalResults,
          page: this.state.page + 1,
        });
      })
      .catch((err) => console.log(err));
  };

  //fetch more data for infinite scrolling
  fetchMoreData = () => {
    this.setState({ page: this.state.page + 1 });
    let url = `https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=15`;
    axios
      .get(url)
      .then((response) => {
        console.log(response.data.articles);
        if (response.data.articles.length > 0) {
          this.setState({
            data: [...this.state.data, ...response.data.articles],
            totalResults: response.data.totalResults,
          });
        } else {
          this.setState({
            loading: false,
            totalResults: this.state.data.length,
          });
        }
        // console.log(this.state.totalResults);
        // console.log(this.state.data.length);
      })
      .catch((err) => {
        console.log(err);
        this.setState({ loading: false });
      });
  };

  // someFunc = () => {
  //   console.log(this.props);
  // };

  //rendering
  render() {
    let { data, loading, totalResults } = this.state;
    // {
    //   this.someFunc();
    // }
    console.log(this.props.mode);
    if (loading)
      return (
        <div
          className={`container my-5 align-items-center text-${
            this.props.mode === "dark" ? "light" : "dark"
          }`}
        >
          <div className="container d-flex justify-content-center my-3">
            <h1>Loading.....</h1>
          </div>
          <div className="d-flex justify-content-center my-4">
            <div className="spinner-border" role="status"></div>
          </div>
        </div>
      );
    return (
      <>
        <div
          className={`container d-flex justify-content-center mt-4 text-${
            this.props.mode === "dark" ? "light" : "dark"
          }`}
        >
          <h1>Top {this.props.category} - News Headlines</h1>
        </div>
        {/* {console.log(data)} */}
        <InfiniteScroll
          dataLength={this.state.data.length}
          next={this.fetchMoreData}
          hasMore={data.length !== totalResults}
          loader={
            <div
              className={`container my-5 align-items-center text-${
                this.props.mode === "dark" ? "light" : "dark"
              }`}
            >
              <div className="container d-flex justify-content-center my-3">
                <h1>Loading.....</h1>
              </div>
              <div className="d-flex justify-content-center my-4">
                <div className="spinner-border" role="status"></div>
              </div>
            </div>
          }
        >
          <div className="container">
            <div className="row my-3 ">
              {data.map((x) => {
                return (
                  <div className="col-md-4" key={x.url}>
                    <NewsCard
                      mode={this.props.mode}
                      title={x.title}
                      description={x.description ? x.description : ""}
                      imageUrl={
                        x.urlToImage !== null && x.urlToImage !== ""
                          ? x.urlToImage
                          : "https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ="
                      }
                      newsUrl={x.url}
                      author={x.author}
                      publishDate={x.publishedAt}
                      source={x.source.name}
                    ></NewsCard>
                  </div>
                );
                // }
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}
