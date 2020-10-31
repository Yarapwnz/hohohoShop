import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterProducts } from '../../../store/actions';

import NavigationItem from './NavigationItem';
// TODO: TRANSLATE TO ENG NAVIGATION ITEMS + FILTER PRODUCTS
const navigationItems = ({ filterProducts, isAuth }) => (
  <ul className="nav-list">
    <NavigationItem
      clicked={() => filterProducts('trees')}
      link="/productlist/trees"
      exact>Christmas tree</NavigationItem>
    <NavigationItem
      clicked={() => filterProducts('garland')}
      link="/productlist/garlands"
      exact>Garlands</NavigationItem>
    <NavigationItem
      clicked={() => filterProducts('decoration')}
      link="/productlist/decorations"
      exact>Christmas decorations</NavigationItem>
    <NavigationItem
      clicked={() => filterProducts('wreath')}
      link="/productlist/wreaths"
      exact>Christmas wreaths</NavigationItem>
    <NavigationItem
      clicked={() => filterProducts('table')}
      link="/productlist/table"
      exact>Decorations for the New Year's table</NavigationItem>
    <NavigationItem
      clicked={() => filterProducts('decor')}
      link="/productlist/decor"
      exact>Decor items</NavigationItem>
    <NavigationItem link="/contact" exact>Contact</NavigationItem>
    <NavigationItem link="/" exact>Home</NavigationItem>
    {isAuth ? <NavigationItem link="/orders" exact>Orders</NavigationItem> : null}
  </ul>
);

NavigationItem.propTypes = {
  isAuth: PropTypes.bool,
  filterProducts: PropTypes.func
};

const mapStateToProps = ({ auth }) => ({ isAuth: auth.token !== null });

export default connect(mapStateToProps, { filterProducts })(navigationItems);