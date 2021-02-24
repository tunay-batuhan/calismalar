import React, { Component } from 'react'
import styles from './mystyle.module.css';
import DenemeList from './DenemeList'

export default class deneme extends Component {
    state = {
        Name: "",
        Maile: "",
        Posta: "",
        name: [],
        maile: [],
        posta: []
    }
    _onChangeName = (e) => {
        this.setState({ Name: e.target.value })   
    }
    _onChangeMaile = (e) => {
        this.setState({ Maile: e.target.value })
    }
    _onChangePosta = (e) => {
        this.setState({ Posta: e.target.value })
    }

    _buttonOnclik = () => {
        let ad = this.state.name;
        let mail = this.state.maile;
        let postakodu = this.state.posta;
        ad.push(this.state.Name);
        mail.push(this.state.Maile);
        postakodu.push(this.state.Posta);
        this.setState({
            name: ad,
            maile: mail,
            posta: postakodu,
            Name: "",
            Maile: "",
            Posta: "",            
        })

    }
    render() {
        const { Name, Maile, Posta, name, maile, posta } = this.state;
        return (
            <div className={styles.container}>
                <div className={"container-row"}>
                    <div className="col" >
                        <input onChange={(e) => this._onChangeName(e)}
                            placeholder="Adınız :" value={Name} />
                    </div>
                    <div className="col" style={{ paddingTop: 10 }}>
                        <input onChange={(e) => this._onChangeMaile(e)}
                            placeholder="Mail Adres :"value={Maile} />
                    </div>
                    <div className="col" style={{ paddingTop: 10 }}>
                        <input onChange={(e) => this._onChangePosta(e)}
                            placeholder="Posta Kodu :" value={Posta}/>
                    </div>
                    <div className="col" style={{ paddingTop: 10 }}>
                        <button onClick={() => this._buttonOnclik()}
                            type="button" className={"btn btn-secondary"}>Bilgileri Ekle</button>
                    </div>
                    <DenemeList
                        name={name} maile={maile} posta={posta} />
                </div>
            </div>
        )
    }
}
