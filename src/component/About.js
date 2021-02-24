import React, { Component } from 'react'
import List from './List'
import { Link } from 'react-router-dom'




export default class About extends Component {
    state={
        inputvalue:"",
        listvalue:[],
        
    }
    
    _inputvalue= (e)=> {
        this.setState({
            inputvalue: [e.target.value],
        })
    }
    _onClickbutton = ()=> {
        let listarray = this.state.listvalue;
        listarray.push(this.state.inputvalue)

        this.setState({
            listvalue:listarray,
            inputvalue:""
        }) 
    }
    _deleteitem = ()=>{
        let a = this.state.listvalue;
        a.pop();
        this.setState({
            listvalue:a
        })
    }
    render() {
        const {inputvalue,listvalue}= this.state;
        return (
            <div >{console.log(listvalue)}
            <li>
              <Link to="/home">Home</Link>
            </li>
            <button type="button" className="btn btn-danger"  onClick={()=>this._deleteitem}
           style={{marginLeft:20}}>x</button>
                <div className="card" style={{ alignItems: "center", marginTop: 70, fontSize: 30 }}>
                    <div className="card-body">
                        <div className="row">
                            <input style={{ width: 260 }} 
                            value={this.state.inputvalue}
                            onChange={(event)=>this._inputvalue(event)} />
                            <button type="button" className="btn btn-success"
                            onClick={this._onClickbutton}
                            style={{ marginLeft: 10, width: 60 }}>Add</button>
                        </div>
                    </div>
                </div>
                <div className="card" style={{ alignItems: "center", fontSize: 30 }}>
                    <div className="row">
                        <List item={listvalue} />
                    </div>
                </div>
            </div>
        )
    }
}
