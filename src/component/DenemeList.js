import React, { Component } from 'react'

export default class DenemeList extends Component {


    render() {
        const { name, maile, posta } = this.props;
        return (
            <div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Ad</th>
                            <th scope="col">Maile</th>
                            <th scope="col">Posta</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            
                            {name.map((name) =>
                                <td>{name}</td>
                            )}
                            {maile.map((maile) =>
                                <td>{maile}</td>
                            )}
                            {posta.map((posta) =>
                                <td>{posta}</td>
                            )}
                        </tr>
                    </tbody>

                </table>

            </div>
        )
    }
}
