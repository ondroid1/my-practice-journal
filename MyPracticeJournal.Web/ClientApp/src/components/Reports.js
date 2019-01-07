import React, { Component } from 'react';
import {PieChart} from 'react-easy-chart';
import {Legend} from 'react-easy-chart';
import { MonthSelector } from './MonthSelector';

export class Reports extends Component {
    displayName = Reports.name

    constructor(props) {
        super(props);
        this.onMonthChange = this.onMonthChange.bind(this);
    
        this.state = { reportData: null, loading: true };

        fetch('api/Report')
        .then(response => response.json())
        .then(data => {
            this.setState({ reportData: data, loading: false });
        });
    }

    onMonthChange(monthMovement) {

        if (!this.state.reportData) {
          return;
        }
    
        var month = this.state.reportData.month;
        var year = this.state.reportData.year;
    
        switch(monthMovement) {
          case 1: // next month
            year = month === 12 ? year + 1 : year;
            month = month === 12 ? 1 : month + 1;
            break;
          case -1: // previous month
            year = month === 1 ? year - 1 : year;
            month = month === 1 ? 12 : month - 1;
            break;
          default: // current month
            var date = new Date();
            month = date.getMonth() + 1;
            year = date.getFullYear();
        }
    
console.log(month, year, new Date(year, month - 1, 1));

        let dateFrom = new Date(year, month - 1, 1);

        this.setState({ loading: true });
    
        fetch('api/Report?dateFrom=' + dateFrom.toISOString())
          .then(response => {
            if (response.ok) {
              return response.json();
            } else {
                alert('Response.ok = false');
            }
          })
          .then(data => {
            this.setState({ reportData: data, loading: false });
          })
          .catch(error => console.log(error));
      }


    static renderReports(reportData, that) {

        var pieData = reportData.reportItems.map(ri => 
            ({ key: `${ri.goalName} - ${ri.practiceName}: ${ri.finishedMinutes} min`, value: ri.finishedMinutes }));

        return (
            <div>
                <MonthSelector month={reportData.month} year={reportData.year} onMonthChange={that.onMonthChange} />
                <PieChart data={pieData} size={300} />
                <Legend data={pieData} dataId={'key'} />
            </div>
        )
    }

    render() {
        let contents = this.state.loading
          ? <p><em>Loading...</em></p>
          : Reports.renderReports(this.state.reportData, this);
    
        return (
          <div>
            <h1>Reports</h1>
    
            {contents}
          </div>
        );
      }
}
