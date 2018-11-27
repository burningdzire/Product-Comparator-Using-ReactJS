import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { Compare, ProductList } from '../../components'
import * as productActions from '..//../store/actions/product'
import { connect } from 'react-redux'

class Main extends Component {
  componentWillMount() {
    this.props.actions.getProducts()
  }

  render() {
    const { products, actions } = this.props;
    const compareProducts = products.filter(product => product.compare);

    return (
      <div className="main">
        <hr />
        <div className="row">
          <div className="col-8">
            <h2>Choose products to compare</h2>
          </div>
        </div>
        <hr />
        <ProductList products={products} compare={actions.compare} />
        {compareProducts.length >= 2 && <Compare products={compareProducts} />}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.product.products
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(productActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main)
