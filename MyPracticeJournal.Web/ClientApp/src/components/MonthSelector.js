import React, { Component } from 'react';
import './MonthSelector.css';

export class MonthSelector extends Component {

    onMonthChangeClick(monthMovement) {
        this.props.onMonthChange(monthMovement);
    }

    render() {
        return (
            <div className="row month-selector">
              <div className="col-sm-2 btn-group">
                <button type="button" className="btn btn-primary" onClick={() => {this.onMonthChangeClick(-1)}}>◀</button>
                <button type="button" className="btn btn-primary" onClick={() => {this.onMonthChangeClick(0)}}>⦿</button>
                <button type="button" className="btn btn-primary" onClick={() => {this.onMonthChangeClick(1)}}>▶</button>
              </div>
              <div className="col-sm-7">
                <h4>{this.props.month} / {this.props.year}</h4>
              </div>
            </div>
          );
    }

}    