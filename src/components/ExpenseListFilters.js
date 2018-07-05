import React from 'react';
import { connect } from 'react-redux';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

class ExpenseListFilters extends React.Component {

    state = {
        calendarFocused: null
    };

    onCalendarFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    };
    
    onDateChange = ({startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };

    render() {
        return (
            <div>
                <input type="text" 
                    value={this.props.filters.text} 
                    onChange={(e) => {
                        console.log(e.target.value);
                        this.props.dispatch(setTextFilter(e.target.value));
                    }} 
                />
                <select 
                    value={this.props.filters.sortBy}
                    onChange={(e) => {
                        console.log(e.target.value);
                        if (e.target.value === "date") {
                            this.props.dispatch(sortByDate());
                        } else if (e.target.value === "amount") {
                            this.props.dispatch(sortByAmount());
                        }
                    }}
                >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker 
                    startDateId="startDate"
                    endDateId="endDate"
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDateChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onCalendarFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    showClearDates={true}
                />
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
};

export default connect(mapStateToProps)(ExpenseListFilters);