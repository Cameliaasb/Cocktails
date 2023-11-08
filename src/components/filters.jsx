import React, { Component } from 'react';
import { SearchBox, RefinementList } from 'react-instantsearch';


class Filters extends Component {
  render() {

    return (
      <div className="filters">

        {/* Search bar */}
        <div className="search-bar">
          <div className="search-prompt yellow-bg"> SEARCH BY INGREDIENT </div>
          <SearchBox />
        </div>

        {/* Filter by category */}
        <RefinementList attribute="category" sortBy={['count:desc', 'name:asc']} />

      </div>
    );
  }


}

export default Filters;
