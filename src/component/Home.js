import React, { Component } from 'react'

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: 3,
            satisFiyatı: 4,
            alısfiyatı:2,
            depo: 10,
            para: 20,
        }
        
    }
    
    componentDidMount(){
        setInterval(()=>{
            this.gameupdate();
        },2000)
    }
    gameupdate = ()=> {
        if(this.state.value > 0){
            this.setState({
                value:this.state.value-1,
                para:this.state.satisFiyatı+this.state.para
            })
        }
    }

    _uret = () => {
        if (this.state.para > this.state.alısfiyatı && this.state.depo > 0 ) {
            this.setState({
                value: this.state.value + 1,
                depo: this.state.depo -1,
            })
        }
    }
    _satinal =()=> {
        if(this.state.para>this.state.alısfiyatı){
            this.setState({
                depo:this.state.depo+1,
                para: this.state.para- this.state.alısfiyatı,
            })
        }
    }
    _satinal10 =()=> {
        if(this.state.para>=this.state.alısfiyatı*10){
            this.setState({
                depo:this.state.depo+10,
                para: this.state.para- this.state.alısfiyatı*10,
            })
        }
    }
    _arttir = () => {
        this.setState({
            satisFiyatı: this.state.satisFiyatı + 0.5,
        })
    }
    _azalt = () => {
        this.setState({
            satisFiyatı: this.state.satisFiyatı - 0.5,
        })
    }
    render() {
        const {value,satisFiyatı,alısfiyatı,para,depo}= this.state;
        return (
            <div className="container" style={{ fontSize: 20 }}>
                <div class="row " style={{ marginTop: 70 }}>
                    <button type="button" class="btn btn-secondary" onClick={this._uret}>ÜRET</button>
                    <div className="col">Midye sayısı : {value} </div>
                </div>
                <div class="row " class="row " style={{ marginTop: 10 }}>
                    <button type="button" class="btn btn-secondary" >SATIŞ FİYATI</button>
                    <div style={{ marginLeft: 20 }}>{satisFiyatı} ₺ </div>
                    <button type="button" class="btn btn-danger" style={{ marginLeft: 20 }} onClick={this._arttir} >+</button>
                    <button type="button" class="btn btn-success" style={{ marginLeft: 10 }} onClick={this._azalt} >-</button>
                </div>
                <div class="row " class="row " style={{ marginTop: 10 }}>
                    <button type="button" class="btn btn-secondary" onClick={this._satinal} >SATIN AL</button>
                    <button type="button" class="btn btn-secondary" style={{ marginLeft: 10 }} onClick={this._satinal10} >10x AL</button>
                    <div className="col">{alısfiyatı}  ₺ </div>
                </div>
                <div class="row " class="row " style={{ marginTop: 10 }}>
                    <button type="button" class="btn btn-secondary" >DEPODAKİ MALZEME</button>
                    <div className="col">  ={depo} </div>
                </div>
                <div class="row " class="row " style={{ marginTop: 10 }}>
                    <button type="button" class="btn btn-secondary" >PARA</button>
                    <div className="col">{para}₺  </div>
                </div>
            </div>
        )
    }
}
