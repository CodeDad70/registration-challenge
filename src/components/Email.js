import React, { Component } from 'react';


class Email extends Component {
  constructor() {
    super()
    this.state = {

      fireRedirectMovie: false,
      fireRedirectActor: false,
    }
  }



  onDropdownSelect = (value) => {

    searchParam = value

  }

  handleSearch = (e) => {
    e.preventDefault();
    const searchValue = this.getSearch.value;
    const data = {
      id: new Date(),
      searchValue

    }

    if (searchParam === "Movie") {
      this.setState({ fireRedirectMovie: true })
      this.props.getMovie(data)


    } else if (searchParam === "Actor") {
      this.setState({ fireRedirectActor: true })
      this.props.getActor(data)

    }


    searchParam = "Movie"
  }



  render() {

    const { fireRedirectMovie } = this.state
    const { fireRedirectActor } = this.state

    return (
      <div className="searchcontainer">

        <h3 className="main-search-text">Search for a movie: </h3>
        <form onSubmit={this.handleSearch}>

          <input className="searchbox" required type="text" ref={(input) => this.getSearch = input}
            placeholder="Enter a Movie or Actor" />


          <div className="dropdown">
            <ReactSingleDropdown

              defaultSelected='Movie'
              onSelect={this.onDropdownSelect}
              noAnimation
              options={['Movie', 'Actor']}
              width='100'
              height='20'
            />


          </div>



          <div className="searchbutton"><button className="button" >Search</button></div>

        </form>

        {fireRedirectMovie && <Redirect to={`/movies`} />}
        {fireRedirectActor && <Redirect to={`/actor`} />}


      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    getMovie: state.getMovie,
    getActor: state.getActor,
  }
}

export default connect(mapStateToProps, {
  getMovie, getActor,
})(MovieSearch)