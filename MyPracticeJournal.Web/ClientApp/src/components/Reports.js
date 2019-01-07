import React, { Component } from 'react';

export class Reports extends Component {
    displayName = Reports.name

    constructor(props) {
        super(props);
    
        this.state = { reportData: null, loading: true };

        fetch('api/Report')
        .then(response => response.json())
        .then(data => {
            this.setState({ reportData: data, loading: false });
        });
    }

    static renderReports(reportData, that) {
        return (
            <div>
                {reportData.month} - {reportData.year}
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
