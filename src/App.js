import './App.css';
import { useState, useEffect } from 'react'
import { Route, Routes, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import mapStateToProps from './redux/mapStateToProps'
import mapDispatchToProps from './redux/mapDispatchToProps'
import Select from './components/Select'
import Table from './components/Table';
import Cart from './components/Cart';

function App(props) {

  /* 
  * props:
  * - warenkorb: Warenkorb-Array
  */

  // laden
  useEffect(() => {
    // warenkorb
    const warenkorbString = localStorage.getItem("warenkorb")
    if (warenkorbString != null) {
      const warenkorbArray = JSON.parse(warenkorbString)
      props.ladeWarenkorb(warenkorbArray)
    }
    // formular
    const formularString = localStorage.getItem("formular")
    if (formularString != null) {
      const formularObjekt = JSON.parse(formularString)
      props.ladeKategorien(formularObjekt)
    }
  }, [])

  // warenkorb speichern
  useEffect(() => {
    const warenkorbString = JSON.stringify(props.warenkorb)
    localStorage.setItem("warenkorb", warenkorbString)
  }, [props.warenkorb])
  // formular speichern
  useEffect(() => {
    const formularString = JSON.stringify(props.formular)
    localStorage.setItem("formular", formularString)
  }, [props.formular])

  return (
    <div id="container">
      <header>
        <h1>Bücher und Mehr</h1>
      </header>
      <nav className="clearfix">
        <NavLink to="/"><div>Shop</div></NavLink>
        <NavLink to="/cart"><div>Warenkorb ({props.warenkorb.length})</div></NavLink>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<><Select /><Table /></>} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
