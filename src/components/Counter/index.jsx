import React from 'react'

export class Counter extends React.Component{
    constructor(){
        super()
        this.state ={
            inputValue:1,
            count: 1,
        }
    }

    onPlus = () => {
        console.log('+')
        this.setState((state)=>({inputValue: state.inputValue+1}))
        console.log(this.state)
    }

    onMinus = () => {
        console.log('-')
    }

    componentDidUpdate(){
        console.log('componentDidUpdate')
    }

    shouldComponentUpdate(){
        console.log('shouldComponentUpdate')
    } 
    render(){
        console.log('render')
        return <div>
            <button onClick={this.onPlus}>+</button>
            <div>{this.state.inputValue}</div>
            <button onClick={this.onMinus}>-</button>
        </div>
    }
}