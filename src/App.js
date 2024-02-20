import React, { Component } from 'react'
// import ReactDOM from 'react-dom/client'
import ReactDOM from 'react-dom'
import Counter from './comonent/Counter';

export default class App extends Component {
  constructor(props){
    super(props)
    this.mountHandler = this.mountHandler.bind(this)
    this.unmountHandler = this.unmountHandler.bind(this)
  }

  mountHandler(){
    console.log(`Component mounted`)

    ReactDOM.render(
      <React.StrictMode>
      <Counter />
    </React.StrictMode> 
    ,document.getElementById('renderHere'))


    // let root1 = ReactDOM.createRoot(document.getElementById('renderHere'))
    // root1.render(
    //   <React.StrictMode>
    //   <Counter />
    // </React.StrictMode> 
    // ,document.getElementById('renderHere'))

  }

  unmountHandler(){
    console.log(`componet unmounted`)
    ReactDOM.unmountComponentAtNode(document.getElementById('renderHere'))

    // let root1 = ReactDOM.creteRoot(document.getElementById('renderHere'))
    // root1.unmount()
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1>Resct LifeCycle</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <button onClick={this.mountHandler} className='btn btn-success float-start'>Mount Component</button>
            <button onClick={this.unmountHandler} className='btn btn-danger float-end'>UnMount Component</button>
          </div>
        </div>

        <section id='renderHere'></section>
      </div>
    )
  }
}
