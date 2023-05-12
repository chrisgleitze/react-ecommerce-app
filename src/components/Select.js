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

    /* const SUBCAT_ARRAY =  props.subcats.filter((ele) => {
        return ele.maincat === props.formular.hauptkategorie
    })
    console.log(SUBCAT_ARRAY) */

    return (
        <>
            <h2>Willkommen zum Shop!</h2>
            <form>
				<select value={props.formular.hauptkategorie} name="hauptkategorie"
                    onChange={props.aendereKategorie}>
					<option value="-1">Bitte Bereich wählen</option>
                    {
                        props.maincats.map((ele, index) => {
                            /* ele = String (Hauptkategorie) */
                            return <option value={index}>{ele}</option>
                        })
                    }
				</select>
				{
                    props.formular.hauptkategorie != "-1" &&
                    <select value={props.formular.unterkategorie} name="unterkategorie"
                        onChange={props.aendereKategorie}>
                        <option value="-1">Bitte wählen</option>
                        {
                            /* props.SUBCAT_ARRAY.map((ele) => {
                                return <option value={ele.subcat}>{ele.name}</option>
                            }) */
                            props.subcats.map((ele) => {
                                /* ele = Objekt (Unterkategorie) */
                                /* if (ele.maincat === props.formular.hauptkategorie) {
                                    return <option value={ele.subcat}>{ele.name}</option>
                                } */
                                return (ele.maincat === props.formular.hauptkategorie && 
                                    <option value={ele.subcat}>{ele.name}</option>)
                            })
                        }
                    </select>
                }
            </form>
        </>
    );
}

export default connect(mapStateToProps, mapDispatchToProps) (Select);