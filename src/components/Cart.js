import React from 'react';
import { connect } from 'react-redux'
import mapStateToProps from '../redux/mapStateToProps'
import mapDispatchToProps from '../redux/mapDispatchToProps'

function Cart(props) {

    /* 
    * props:
    * - warenkorb: Warenkorb-Array
    * - entfernenVomWarenkorb - zu übergeben: Index
    */

    return (
        <>
            {
                props.warenkorb.length > 0 ?
                <>
                    <h2>Warenkorb</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Titel</th>
                                <th>Preis</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                props.warenkorb.map((ele, index) => {
                                    /* ele = Objekt (Produkt) */
                                    return (<tr>
                                        <td>{ele.titel}</td>
                                        <td>{ele.preis} EUR</td>
                                        <td onClick={() => {
                                            props.entfernenVomWarenkorb(index)
                                        }}>Entfernen</td>
                                    </tr>)
                                })
                            }
                        </tbody>
                    </table>
                </>
                :
                <p>Der Warenkorb ist leer.</p>
            }
        </>
    );
}

export default connect(mapStateToProps, mapDispatchToProps) (Cart);