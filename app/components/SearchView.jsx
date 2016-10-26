import React from 'react';

class SearchView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  handleInputChange(e) {
    this.props.handleSearchInputChange(e.target.value);
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleInputChange.bind(this)}
        />
        <button>
          Search
        </button>
      </div>
    );
  }
}

export default SearchView;