import React, { Component } from 'react';
import * as d3 from "d3";

class TabChart extends Component {
    componentDidMount() {
        const data = [
            {
                "Name": "L1", value: 10,
                "Sublevels": [{
                    "Name": "SL1", value: 20,
                    "Sublevels": [
                        { "Name": "L1S1", value: 20 },
                        { "Name": "L1S2", value: 30 }
                    ]
                }]
            },
            { "Name": "L2", value: 20 },
            {
                "Name": "L3", value: 30,
                "Sublevels": [{
                    "Name": "SL3", value: 20,
                    "Sublevels": [
                        { "Name": "L3S1", value: 20 },
                        { "Name": "L3S2", value: 30 }
                    ]
                }]
            }
        ];

        // const data = [
        //     { "date": "2013-01-01", "close": 45 },
        //     { "date": "2013-02-01", "close": 50 },
        //     { "date": "2013-03-01", "close": 55 },
        //     { "date": "2013-04-01", "close": 50 },
        //     { "date": "2013-05-01", "close": 45 },
        //     { "date": "2013-06-01", "close": 50 },
        //     { "date": "2013-07-01", "close": 50 },
        //     { "date": "2013-08-01", "close": 55 }
        // ];
        this.drawChart(data);
    }

    drawChart(data) {
        // render the table(s)
        this.tabulate(data, ['Name', 'value']); // 2 column table
    }

    tabulate(data, columns) {
        var table = d3.select('body').append('table')
        var thead = table.append('thead')
        var tbody = table.append('tbody');

        // append the header row
        thead.append('tr')
            .selectAll('th')
            .data(columns).enter()
            .append('th')
            .text(function (column) { return column; });

        // create a row for each object in the data
        var rows = tbody.selectAll('tr')
            .data(data)
            .enter()
            .append('tr');
        //selectAll('tr')
        //rows = rows.selectAll('tr').data().enter().append('tr');

        // create a cell in each row for each column
        var cells = rows.selectAll('td')
            .data(function (row) {
                return columns.map(function (column) {
                    return { column: column, value: row[column] };
                });
            })
            .enter()
            .append('td')
            .text(function (d) { return d.value; });

        return table;
    }



    render() {
        return (<div>
            This is TabChart component
        </div>
        )
    }
}

export default TabChart;