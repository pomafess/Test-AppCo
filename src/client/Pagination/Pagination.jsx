import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import {connect} from "react-redux";

import {getBlocks} from "../../redux/table/operations";
import {getTableList} from "../../redux/table/selectors";

class Pagination extends Component{
    state = {
        currentPage: 1,
        pageSize: 50
    };
    pageChangeHandler({selected}) {
    this.setState({currentPage: selected});
    this.props.ongetBlocks(selected, this.state.pageSize)
    };
    
    render(){
       return  (
            <div>
      <ReactPaginate
          previousLabel={'<'}
          nextLabel={'>'}
          breakLabel={'...'}
             breakClassName={'break-me'}
          pageCount={20}
          marginPagesDisplayed={0}
          pageRangeDisplayed={5}
          onPageChange={this.pageChangeHandler.bind(this)}
          containerClassName={'pagination'}
            activeClassName={'active'}
            pageClassName={"page-item"}
            pageLinkClassName="page-link"
            previousClassName="page-item"
            nextClassName="page-item"
            previousLinkClassName="page-link"
            nextLinkClassName="page-link"
            forcePage={this.currentPage}
        />
            </div>
        )
    }
    }

const mapStateToProps = state => ({
  users: getTableList(state),
});

const mapDispatchToProps = {
  ongetBlocks: getBlocks,
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);