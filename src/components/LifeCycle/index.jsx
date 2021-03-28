import React from 'react'

export class LifeCycle extends React.Component{
    constructor(){
        super()
        this.state ={}
        console.log('constructor')
    }

    componentDidMount(){
        console.log('componentDidMount')
    }

    componentDidUpdate(){
        console.log('componentDidUpdate')
    }

    shouldComponentUpdate(){
        console.log('shouldComponentUpdate')
    } 

    componentWillUnmount(){
        console.log('componentWillUnmount')
    }
    
    componentWillMount(){
        console.log('componentWillMount')
    }

    render(){
        console.log('render')
        return <div>
            test
        </div>
    }
}