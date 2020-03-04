import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer';
import Main from '../main/main.jsx';
import Property from '../property/property.jsx';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      value: -1,
    };

    this._handleHeaderClick = this._handleHeaderClick.bind(this);
  }

  _handleHeaderClick(id) {
    this.setState({
      value: id,
    });
  }

  _renderMainScreen() {
    return (
      <Main
        cities={this.props.cities}
        currentCity={this.props.currentCity}
        currentOffers={this.props.currentOffers}
        onHeaderClick={this._handleHeaderClick}
        onCityClick={this.props.onCityClick}
        currentSortType={this.props.currentSortType}
        onSortTypeClick={this.props.onSortTypeClick}
        onRentalCardHover={this.props.onRentalCardHover}
        activeCardCoordinates={this.props.activeCardCoordinates}
      />
    );
  }

  _renderPropertyScreen(id) {
    const offer = this.props.currentOffers[0].offers.find(
        (property) => property.id === +id
    );
    return offer ? (
      <Property
        offer={offer}
        location={this.props.currentOffers[0].location}
        offers={this.props.currentOffers[0].offers}
        onHeaderClick={this._handleHeaderClick}
        onRentalCardHover={this.props.onRentalCardHover}
        activeCardCoordinates={this.props.activeCardCoordinates}
      />
    ) : (
      <Redirect to="/" />
    );
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderMainScreen()}
          </Route>
          <Route
            exact
            path="/property/:id"
            render={(routeProps) =>
              this._renderPropertyScreen(routeProps.match.params.id)
            }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  allOffers: PropTypes.array.isRequired,
  cities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  currentOffers: PropTypes.array.isRequired,
  currentCity: PropTypes.string.isRequired,
  onCityClick: PropTypes.func.isRequired,
  currentSortType: PropTypes.string.isRequired,
  onSortTypeClick: PropTypes.func.isRequired,
  onRentalCardHover: PropTypes.func.isRequired,
  activeCardCoordinates: PropTypes.arrayOf(PropTypes.number.isRequired)
    .isRequired,
};

const mapStateToProps = (state) => ({
  allOffers: state.allOffers,
  cities: state.cities,
  currentCity: state.currentCity,
  currentOffers: state.currentOffers,
  currentSortType: state.currentSortType,
  activeCardCoordinates: state.activeCardCoordinates,
});

const mapDispatchToProps = (dispatch) => ({
  onCityClick(evt, city) {
    evt.preventDefault();
    dispatch(ActionCreator.changeCity(city));
    dispatch(ActionCreator.getOffers(city));
  },
  onSortTypeClick(sortType) {
    dispatch(ActionCreator.changeSortType(sortType));
  },
  onRentalCardHover(coordinates) {
    dispatch(ActionCreator.setActiveCard(coordinates));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
