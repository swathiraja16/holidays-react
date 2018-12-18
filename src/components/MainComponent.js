import React, {Component} from 'react';
import Header from './HeaderComponent';
import  Holidays  from './HolidaysComponent';
import Countries from './CountriesComponent';
import States from './StatesComponent';
import Cities from './CitiesComponent'
import FormulaNotes from './FormulaNotesComponent'
import ConcernsQuestions from './ConcernsQuestionsComponent'
import GregorianMonthDay from './GregorainMonthDayComponent'
import GMDS from './GMDSComponent'
import GNK from './GNKComponent'
import GKM from './GKMComponent'
import {Home} from './HomeComponent';
import {postHoliday, fetchHolidays, postCountry, fetchCountries, postState, fetchStates, postCity, fetchCities, postNote, 
    fetchNotes, postCQ, fetchCQ, postGM, fetchGM, postGMS, fetchGMS, postGNK, fetchGNK, postGKM, fetchGKM} from "../redux/ActionCreators";
import {withRouter, Route, Redirect, Switch} from 'react-router-dom';
import { connect } from 'react-redux';
//import {TransitionGroup, CSSTransition} from 'react-transition-group';

const mapStateToProps = state =>{
    return {
        holidays: state.holidays,
        countries: state.countries,
        states: state.states,
        cities: state.cities,
        formulanotes: state.formulanotes,
        concernquestions: state.concernquestions,
        gm: state.gm,
        gms: state.gms,
        gnk: state.gnk,
        gkm: state.gkm
    }
}

const mapDispatchToProps = dispatch => ({
    postHoliday: (name) => {dispatch(postHoliday(name))},
    postCountry: (name) => {dispatch(postCountry(name))},
    postState: (name, country) => {dispatch(postState(name, country))},
    postCity: (name,state, country) => {dispatch(postCity(name,state, country))},
    postCQ: (cq) => {dispatch(postCQ(cq))},
    postGM: (month, day, offset, leapYear) => {dispatch(postGM(month, day, offset, leapYear))},
    postGMS: (month, day, offset, leapYear, description) => {dispatch(postGMS(month, day, offset, leapYear, description))},
    postGNK: (nth, kday, month, offset) => {dispatch(postGNK(nth, kday, month, offset))},
    postGKM: (kday, afteretc, month, day, offset) => {dispatch(postGKM(kday, afteretc, month, day, offset))},
    postNote: (note) => {dispatch(postNote(note))},
    fetchHolidays: () => dispatch(fetchHolidays()),
    fetchCountries: () => dispatch(fetchCountries()),
    fetchStates: () => dispatch(fetchStates()),
    fetchCities: () => dispatch(fetchCities()),
    fetchNotes: () => dispatch(fetchNotes()),
    fetchCQ: () => dispatch(fetchCQ()),
    fetchGM: () => dispatch(fetchGM()),
    fetchGMS: () => dispatch(fetchGMS()),
    fetchGNK: () => dispatch(fetchGNK()),
    fetchGKM: () => dispatch(fetchGKM())
});

class Main extends Component{

    componentDidMount(){
        this.props.fetchHolidays();
        this.props.fetchCountries();
        this.props.fetchStates();
        this.props.fetchCities();
        this.props.fetchNotes();
        this.props.fetchCQ();
        this.props.fetchGM();
        this.props.fetchGMS();
        this.props.fetchGNK();
        this.props.fetchGKM();
    }
    render(){

       const HolidayPage = () => {
            return (
            <Holidays
                errMess = {this.props.holidays.errMess}
                postHoliday={this.props.postHoliday} 
                />
            );
        }

        const CountryPage = () => {
            return (
                <Countries errMess = {this.props.countries.errMess}
                postCountry={this.props.postCountry} 
                />
            )
        }

        const StatePage = () => {
            return (
                <States errMess = {this.props.states.errMess}
                postState={this.props.postState} 
                />
            )
        }

        const CityPage = () => {
            return (
                <Cities errMess = {this.props.cities.errMess}
                postCity={this.props.postCity} 
                />
            )
        }

        const NotePage = () => {
            return (
                <FormulaNotes errMess = {this.props.formulanotes.errMess}
                postNote={this.props.postNote} 
                />
            )
        }

        const CQPage = () => {
            return (
                <ConcernsQuestions errMess = {this.props.concernquestions.errMess}
                postCQ={this.props.postCQ} 
                />
            )
        }

        const GMPage = () => {
            return (
                <GregorianMonthDay errMess = {this.props.gm.errMess}
                postGM={this.props.postGM} 
                />
            )
        }

        const GMSPage = () => {
            return (
                <GMDS errMess = {this.props.gms.errMess}
                postGMS={this.props.postGMS} 
                />
            )
        }

        const GNKPage = () => {
            return (
                <GNK errMess = {this.props.gnk.errMess}
                postGNK={this.props.postGNK} 
                />
            )
        }

        const GKMPage = () => {
            return (
                <GKM errMess = {this.props.gmk.errMess}
                postGMK={this.props.postGMK} 
                />
            )
        }
        
        return(
          <div>
              <Header/>
              <Home />
                <Switch location={this.props.location}>
                    <Route path="/holidays" component={HolidayPage} />
                    <Route path="/countries" component={CountryPage} />
                    <Route path="/states" component={StatePage} />
                    <Route path="/cities" component={CityPage} />
                    <Route path="/formulanotes" component={NotePage} />
                    <Route path="/concernsquestions" component={CQPage} />
                    <Route path="/gm" component={GMPage} />
                    <Route path="/gms" component={GMSPage} />
                    <Route path="/gnk" component={GNKPage} />
                    <Route path="/gkm" component={GKMPage} />
                    <Redirect to='/home' component={() => <Home />} />
                </Switch>                
          </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));