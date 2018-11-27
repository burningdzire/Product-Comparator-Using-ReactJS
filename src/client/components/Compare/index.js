import React from 'react'
import './styles.css'

const Compare = ({ products }) =>
  <div className="row">
    <div className="col-md-8 text-center">
      <table className="table">
        <thead className="thead-default">
          <tr>
            <th />
            {products.map(product =>
              <th key={product.id}>
                {product.name}
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          <tr className="price">
            <th scope="row">Price</th>
            {products.map(product =>
              <td key={product.id} className="text-center">{product.price}</td>
            )}
          </tr>
          <tr className="condition">
            <th scope="row">Condition</th>
            {products.map(product =>
              <td key={product.id}>
                {product.condition}
              </td>
            )}
          </tr>
        </tbody>
      </table>
    </div>
  </div>;

export default Compare
