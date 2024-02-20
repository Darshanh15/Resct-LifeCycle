import React, { Component } from 'react'
// import Counter from './Counter';
import ReactDOM from 'react-dom'

class Counter extends Component {
    constructor(props){
        super(props)
        //initial state
        this.state = {
            view: false
        }
        console.log('state and props initialized')
    }
    addNumber(){
        ReactDOM.render(
            <React.StrictMode>
                <Counter num={this.props.num + 1} />
            </React.StrictMode>,
            document.getElementById('renderHere')
        )
        
    }

    // mount stage methods
    componentWillMount(){
        console.log(`component willmount (deprecated)`)
    }

    componentDidMount(){
        console.log(`component did mount`)
    }
    // update methods
    componentWillReceiveProps(nP,nC){
        console.log(`component willreceive props(deprecated)`)
        console.log(`nP=`, nP)
        if(nP.num >= 10){
            this.setState({
                view: true
            })
        }
    }

    // static getDerivedStateFromProps(nP,nS){
    //     console.log('get derived state from props')
    //     console.log(`nP =`, nP)
    //     console.log(`nS =`, nS)
    // }
    

    shouldComponentUpdate(nP,nS,nC){
        console.log(`should Component Update`)
        console.log(`nP=`,nP)
        console.log(`nS=`,nS)
        return true;
    }

    componentWillUpdate(nP,nS,nC){
        console.log(`component Will Update(depreceted)`)
        console.log(`nP=`,nP)
        console.log(`nS=`,nS)

    }
    componentDidUpdate(oP,oS){
        console.log(`component Did Update`)
        console.log(`oP=`,oP)
        console.log(`oS=`,oS)
    }
  render() {
    console.log(`component rendered`)
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="text-success display-3">Counter</div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <h1>Number = {this.props.num}</h1>
                    <h1>
                        {this.state.view ? "welcome to lifcycle ": "Need more counts"}
                    </h1>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    {
                        this.state.view ? null : <button onClick={()=>this.addNumber()} className='btn btn-warning'>Add+1</button>
                    }
                </div>
            </div>
        </div>
    )
  }
}
//defult props
Counter.defaultProps = {
    num:0
}

export default Counter
