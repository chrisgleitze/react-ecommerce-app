import React from 'react';
import { connect } from 'react-redux'
import mapStateToProps from '../redux/mapStateToProps'
import mapDispatchToProps from '../redux/mapDispatchToProps'
import { useNavigate } from 'react-router-dom'

function Table(props) {

    /* 
    * props:
    * - produkte: Produktdaten
    * - formular: Formularwerte
    */

    const navigate = useNavigate()

    const SPALTEN = [
        [
          [
              {
                  field: "titel",
                  name: "Titel"
              },/* 
              {
                  field: "jahr",
                  name: "Jahr"
              },
              {
                  field: "publisher",
                  name: "Publisher"
              }, */
              {
                  field: "preis",
                  name: "Preis"
              }
          ],
          [
              {
                  field: "autor",
                  name: "Autor"
              },
              {
                  field: "titel",
                  name: "Titel"
              },/* 
              {
                  field: "jahr",
                  name: "Jahr"
              },
              {
                  field: "seiten",
                  name: "Seiten"
              },
              {
                  field: "verlag",
                  name: "Verlag"
              }, */
              {
                  field: "preis",
                  name: "Preis"
              }
          ],
          [
              {
                  field: "autor",
                  name: "Autor"
              },
              {
                  field: "titel",
                  name: "Titel"
              },/* 
              {
                  field: "jahr",
                  name: "Jahr"
              },
              {
                  field: "laenge",
                  name: "Länge"
              },
              {
                  field: "verlag",
                  name: "Verlag"
              }, */
              {
                  field: "preis",
                  name: "Preis"
              }
          ]
        ],
        [
          [
              {
                  field: "titel",
                  name: "Titel"
              },/* 
              {
                  field: "hersteller",
                  name: "Hersteller"
              }, */
              {
                  field: "preis",
                  name: "Preis"
              }
          ],
          [
              {
                  field: "titel",
                  name: "Titel"
              },/* 
              {
                  field: "beschreibung",
                  name: "Beschreibung"
              }, */
              {
                  field: "preis",
                  name: "Preis"
              }
          ]
        ]
    ]

    const aktuelleUnterkategorie = props.subcats.find((ele) => {
        return ele.maincat === props.formular.hauptkategorie &&
            ele.subcat === props.formular.unterkategorie
    })

    return (
        <>
            {
                props.formular.hauptkategorie != "-1" &&
                props.formular.unterkategorie != "-1" &&
                <div>
                    <h2>{aktuelleUnterkategorie && aktuelleUnterkategorie.name}</h2>
                    <table>
                        <thead>
                            <tr>
                                {
                                    SPALTEN[props.formular.hauptkategorie][props.formular.unterkategorie].map((col) => {
                                        return <th>{col.name}</th>
                                    })
                                }
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                props.artikel.map((ele) => {
                                     /* ele = Objekt (Produkt) */
                                    return ele.maincat === props.formular.hauptkategorie &&
                                        ele.subcat === props.formular.unterkategorie &&
                                        (<tr>
                                            {
                                                SPALTEN[props.formular.hauptkategorie][props.formular.unterkategorie].map((col) => {
                                                    return <td>{ele[col.field]}{col.field === "preis" && " EUR"}</td>
                                                })
                                            }
                                            <td onClick={() => {
                                                props.produktAuswaehlen(ele)
                                                navigate("/product")
                                            }}>Details</td>
                                    </tr>)
                                })
                            }
                        </tbody>
                    </table>
                </div>
            }

        </>
    );
}

export default connect(mapStateToProps, mapDispatchToProps) (Table);