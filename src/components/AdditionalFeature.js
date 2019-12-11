import React, { useState } from 'react';
import { connect } from "react-redux";
import { buyItem } from '../actions/actions';

const AdditionalFeature = props => {
  console.log(props);
  const [addItem, setAddItem] = useState();
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => props.buyItem(addItem)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};
const mapStateToProps = state => {
  return {
    car: state.car.features
  }
}
export default AdditionalFeature;
