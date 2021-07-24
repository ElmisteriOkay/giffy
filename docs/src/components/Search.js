import React from 'react';

class Search extends React.Component {
  searchRef = React.createRef();

  getData = (e) => {
      e.preventDefault();

      let term = this.searchRef.current.value;
      this.props.searchData(term);
  }

  render() {
      return(
        <div className="container jumbotron">
          <form onChange={this.getData} onSubmit={this.getData}>
              <div className="row">
                  <div className="form-group col-md-8">
                      <input
                        ref={this.searchRef}
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Buscar gif" />
                  </div>
                  <div className="form-group col-md-4">
                      <input type="submit" className="btn btn-lg btn-danger"/>
                  </div>
              </div>
          </form>
        </div>
      );
  }
}

export default Search;
