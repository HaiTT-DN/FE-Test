import React from "react";
import Nav from "./Navbar/Nav";
import BlogsList from "./Blogs/BlogsList";
import withLoading from "./Utilities/withLoading";
import Pagination from "./Utilities/Pagination";
import BlogDetails from "./Blogs/BlogDetails";

import "../App.css";

const BLOGS_PER_PAGE = 10;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      blogs: [],
      searchTerm: "",
      totalResults: 0,
      currentPage: 1,
      pageNumber: 1,
      currentBlog: null,
      sort: "asc",
    };
    this.apiUrl = `https://5f55a98f39221c00167fb11a.mockapi.io/blogs`;
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch(this.apiUrl)
      .then((res) => res.json())
      .then((blogs) => {
        const firstPageBlogs = blogs.slice(0, 10);
        this.setState({
          loading: false,
          blogs: [...firstPageBlogs],
          totalResults: blogs.length,
        });
      })
      .catch((err) => console.log(err));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    fetch(
      this.apiUrl +
        `?search=${this.state.searchTerm}&sortBy=createdAt&order=${this.state.sort}`
    )
      .then((res) => res.json())
      .then((blogs) => {
        const firstPageBlogs = blogs.slice(0, 10);
        this.setState({
          loading: false,
          blogs: [...firstPageBlogs],
          totalResults: blogs.length,
        });
      })
      .catch((err) => console.log(err));
  };

  handleSearchChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  handleSort = (e) => {
    this.setState({ sort: e.target.value });
    fetch(
      this.apiUrl +
        `?sortBy=createdAt&order=${this.state.sort}&page=${this.state.pageNumber}&limit=${BLOGS_PER_PAGE}&search=${this.state.searchTerm}`
    )
      .then((res) => res.json())
      .then((blogs) => {
        this.setState({
          blogs: [...blogs],
        });
      })
      .catch((err) => console.log(err));
  };

  nextPage = (pageNumber) => {
    this.setState({ loading: true });
    fetch(
      this.apiUrl +
        `?search=${this.state.searchTerm}&page=${pageNumber}&limit=${BLOGS_PER_PAGE}&sortBy=createdAt&order=${this.state.sort}`
    )
      .then((res) => res.json())
      .then((blogs) => {
        this.setState({
          loading: false,
          blogs: [...blogs],
          currentPage: pageNumber,
          pageNumber: pageNumber,
        });
      })
      .catch((err) => console.log(err));
  };

  viewBlogDetails = (id) => {
    this.setState({ loading: true });
    fetch(this.apiUrl + `/${id}`)
      .then((res) => res.json())
      .then((blog) => {
        this.setState({
          loading: false,
          currentBlog: blog,
        });
      })
      .catch((err) => console.log(err));
  };

  closeBlogDetail = () => {
    this.setState({ currentBlog: null });
  };

  render() {
    const ListLoading = withLoading(BlogsList);
    const { loading, blogs, totalResults, currentPage, currentBlog } =
      this.state;
    const numberOfPages = Math.ceil(totalResults / BLOGS_PER_PAGE);
    return (
      <div className="App mask rgba-gradient">
        <Nav
          handleSubmit={this.handleSubmit}
          handleChange={this.handleSearchChange}
          handleSort={this.handleSort}
        />
        {currentBlog == null ? (
          <div>
            <div className="d-flex justify-content-center align-items-center">
              <ListLoading
                isLoading={loading}
                blogs={blogs}
                viewBlogDetails={this.viewBlogDetails}
              />
            </div>
            {!loading && (
              <Pagination
                numberOfPages={numberOfPages}
                nextPage={this.nextPage}
                currentPage={currentPage}
              />
            )}
          </div>
        ) : (
          <BlogDetails
            closeBlogDetail={this.closeBlogDetail}
            currentBlog={currentBlog}
          />
        )}
      </div>
    );
  }
}

export default App;
