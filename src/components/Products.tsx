import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import State from '../interfaces/State'
import Product from './Product';
import Cart from './Cart';

export default function Products() {
    const products=useSelector((state:State)=>state.products);
    const dispatch=useDispatch();
    const notify=useSelector((state:State)=>state.notify);
  return (
    <div className="container">
  <div className="page-header">
    <h1>Shopping Cart</h1>
  </div>
  <div className="row">
    <div>
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h1 className="panel-title">List Products</h1>
          </div>
          <div className="panel-body" id="list-product">
            <Product/>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <div className="panel panel-danger">
          <div className="panel-heading">
            <h1 className="panel-title">Your Cart</h1>
          </div>
          <Cart/>
        </div>
        {notify==='noProduct'
          && <div className="alert alert-sucess" role="alert" id="mnotification">
             There is no product in your cart !
          </div>
        }
        {notify==='add'
          && <div className="alert alert-success" role="alert" id="mnotification">
            Add to cart successfully
          </div>
        }
        {notify==='update'
          && <div className="alert alert-warning" role="alert" id="mnotification">
           Update product successfully
          </div>
        }
        {notify==='delete'
          && <div className="alert alert-danger" role="alert" id="mnotification">
             Delete product successfully!
          </div>
        }
      </div>
    </div>
  </div>
</div>

  )
}
