import React from 'react';
import Dashboard from './components/Dashboard';

class SidebarSearch extends React.Component {
    constructor(props) {
      super(props);
      this.state = { selectedCategory: 'tracks' };
    }

    updateCategory = (category) => this.setState({ selectedCategory: category });

    render() {
        return (
          <div className="sidebar-search">
            <Dashboard key={this.props.refreshSidebar} selectedCategory={this.state.selectedCategory} updateCategory={this.updateCategory} />
          </div>
        );
    }
}

export default SidebarSearch;