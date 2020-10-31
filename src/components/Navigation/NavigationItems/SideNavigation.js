import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterProducts } from '../../../store/actions';
import '../Navigation.scss';

import NavigationItem from './NavigationItem';

const Categories = [
  {
    category: 'trees',
    content: 'Christmas Tree',
    linkType: 'main'
  },
  {
    category: 'garland',
    content: 'Garlands',
    linkType: 'main'
  },
  {
    category: 'decoration',
    content: 'Christmas decorations',
    linkType: 'main'
  },
  {
    category: 'wreath',
    content: 'Christmas wreaths',
    linkType: 'main'
  },
  {
    category: 'table',
    content: 'Decorations for table',
    linkType: 'main'
  },
  {
    category: 'decor',
    content: 'Decor items',
    linkType: 'main'
  },
];

const sideNavigation = ({ filterProducts, children }) => (
  <nav className="side-navigation">
    <ul className="side-navigation-list">
      {Categories.map(Category => {
        const { category, linkType, content } = Category;

        return (
          <NavigationItem
            key={category}
            clicked={() => filterProducts(category)}
            linkType={linkType}
            link={`/productlist/${category}`}>
            {content}
          </NavigationItem>
        )
      })}
      {children}
    </ul>
  </nav>
);

sideNavigation.propTypes = {
  filterProducts: PropTypes.func.isRequired
};

export default connect(null, { filterProducts })(sideNavigation);