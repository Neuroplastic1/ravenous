import React, { Component } from 'react';
import './SearchBar.css'

class SearchBar extends Component{
  constructor(props) {
    super(props);
// initial states
    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match'
    };

    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

    this.sortByOptions = {
      'Best Match':'best-match',
      'Highest Rated':'rating',
      'Most Reviewed':'review_count'

    }
  }
// returns the current CSS class for a sorting option
  getSortByClass(sortByOption) {
    if(this.state.sortBy === sortByOption) {
      return 'active'
    } else { return ''}
  }
// sets the state of a sorting option
  handleSortByChange(sortByOption) {
    this.setState({sortBy : sortByOption})
  }
// handleChagne for term input element
  handleTermChange(e) {
    this.setState({ term : e.target.value})
  }
// handleChange for location input element
  handleLocationChange(e) {
    this.setState({ location : e.target.location})
  }

  handleSearch(e) {
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortby);
// prevent the default action of clicking a link from triggering at the end of the method
    e.preventDefault()
  }

  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map(sortByOption => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      return (<li
                  key={sortByOptionValue}
                  className={this.getSortByClass(sortByOptionValue)}
                  onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>
                  {sortByOption}
              </li>)
    });
  }

  render() {
    return (
    <div className="SearchBar">
        <div className="SearchBar-sort-options">
           <ul>
             {this.renderSortByOptions()}
           </ul>
        </div>
      <div className="SearchBar-fields">
        <input placeholder="Search Businesses" onChange={this.handleTermChange}/>
        <input placeholder="Where?" onChange={this.handleLocationChange}/>
      </div>
      <div className="SearchBar-submit">
         <a href="www.#.com" onClick={this.handleSearch}>Let's Go</a>
      </div>
    </div>
    );
  }
}

export default SearchBar
