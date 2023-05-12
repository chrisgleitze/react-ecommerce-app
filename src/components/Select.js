import React from 'react';
import { connect } from 'react-redux'
import mapStateToProps from '../redux/mapStateToProps'
import mapDispatchToProps from '../redux/mapDispatchToProps'

function Select(props) {

    /* 
    * props:
    * - produkte: Produktdaten
    * - formular: Formularwerte
    * - aendereKategorie: Funktion
    */

    return (
        <>
            <h2>Willkommen zum Shop!</h2>
            <form>
				<select value={props.formular.hauptkategorie} name="hauptkategorie"
                    onChange={props.aendereKategorie}>
					<option value="-1">Bitte Bereich wählen</option>
                    {
                        props.produkte.map((ele, index) => {
                            /* ele = Objekt (Hauptkategorie) */
                            return <option value={index}>{ele.name}</option>
                        })
                    }
				</select>
				{
                    props.formular.hauptkategorie != "-1" &&
                    <select value={props.formular.unterkategorie} name="unterkategorie"
                        onChange={props.aendereKategorie}>
                        <option value="-1">Bitte wählen</option>
                        {
                            props.produkte[props.formular.hauptkategorie].gruppe.map((ele, index) => {
                                /* ele = Objekt (Unterkategorie) */
                                return <option value={index}>{ele.name}</option>
                            })
                        }
                    </select>
                }
            </form>
        </>
    );
}

export default connect(mapStateToProps, mapDispatchToProps) (Select);