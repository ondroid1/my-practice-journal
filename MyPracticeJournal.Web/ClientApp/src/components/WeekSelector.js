import React, { Component } from 'react';
import './WeekSelector.css';

export class WeekSelector extends Component {

    constructor(props) {
        super(props);
    }

    onWeekChangeClick(weekMovement) {
        this.props.onWeekChange(weekMovement);
    }

    render() {
        return (
            <div className="row week-selector">
              <div className="col-sm-2">
                <button type="button" className="btn btn-primary" onClick={() => {this.onWeekChangeClick(-1)}}>◀</button>
                <button type="button" className="btn btn-primary" onClick={() => {this.onWeekChangeClick(0)}}>⦿</button>
                <button type="button" className="btn btn-primary" onClick={() => {this.onWeekChangeClick(1)}}>▶</button>
              </div>
              <div className="col-sm-7">
                {this.props.dateFrom ? this.props.dateFrom.toLocaleDateString("cs-CZ") + ' - ' : ''} 
                {this.props.dateTo ? this.props.dateTo.toLocaleDateString("cs-CZ") : ''}
              </div>
            </div>
          );
    }

}    