import React, { Component } from 'react';
import { Redirect } from 'react-router'
import ReactSingleDropdown from 'react-single-dropdown'
import tzIds from 'tz-ids';

class Timezones extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timezone: "",
      fireRedirect: false,

    }
  }

  onDropdownSelect = (value) => {

    this.setState({
      timezone: value,
    })
  }

  handleSearch = (e) => {
    e.preventDefault();
    console.log(this.state.timezone);
  }

  render() {

    console.log(this.state)
    const { fireRedirect } = this.state


    return (
      <div className="main-card">

        <div className="headline"> <h3> Please select your timezone: </h3></div>
        <form onSubmit={this.handleSearch}>

          <div className="dropdown">
            <ReactSingleDropdown
              placeholder="Choose a Timezone"
              defaultSelected='Timezones'
              onSelect={this.onDropdownSelect}
              noAnimation
              options={tzIds}
              width='300'
              height='50'
            />

          </div>

          <br />

          <div ><button className="button" >Submit</button></div>

        </form>

        {fireRedirect && <Redirect to={`/email`} />}


      </div>
    );
  }
}


export default Timezones