import React, { Component } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import Clock from './Clock';
import { setInterval } from 'timers';

/* Data for dev */
const data = [
    {
        "accumulated_turnover": 9992012,
        "account_executive": 81753,
        "daily_turnover": 9989300
    },
    {
        "accumulated_turnover": 10018776,
        "account_executive": 15410,
        "daily_turnover": 10011775
    },
    {
        "accumulated_turnover": 10070057,
        "account_executive": 89794,
        "daily_turnover": 10064269
    },
    {
        "accumulated_turnover": 10011904,
        "account_executive": 17347,
        "daily_turnover": 10006149
    },
    {
        "accumulated_turnover": 10118848,
        "account_executive": 38088,
        "daily_turnover": 10113460
    },
    {
        "accumulated_turnover": 10027091,
        "account_executive": 26642,
        "daily_turnover": 10017588
    },
    {
        "accumulated_turnover": 10064057,
        "account_executive": 20539,
        "daily_turnover": 10059222
    },
    {
        "accumulated_turnover": 9968462,
        "account_executive": 28381,
        "daily_turnover": 9962344
    },
    {
        "accumulated_turnover": 9994465,
        "account_executive": 95058,
        "daily_turnover": 9990075
    },
    {
        "accumulated_turnover": 10055815,
        "account_executive": 49872,
        "daily_turnover": 10053437
    },
    {
        "accumulated_turnover": 10058897,
        "account_executive": 89222,
        "daily_turnover": 10050383
    },
    {
        "accumulated_turnover": 9881938,
        "account_executive": 71337,
        "daily_turnover": 9880145
    },
    {
        "accumulated_turnover": 9937312,
        "account_executive": 38874,
        "daily_turnover": 9931876
    },
    {
        "accumulated_turnover": 10068284,
        "account_executive": 16188,
        "daily_turnover": 10062304
    },
    {
        "accumulated_turnover": 9992691,
        "account_executive": 99344,
        "daily_turnover": 9986455
    },
    {
        "accumulated_turnover": 9917928,
        "account_executive": 62894,
        "daily_turnover": 9912837
    },
    {
        "accumulated_turnover": 10077462,
        "account_executive": 44268,
        "daily_turnover": 10069846
    },
    {
        "accumulated_turnover": 9896044,
        "account_executive": 71614,
        "daily_turnover": 9894748
    },
    {
        "accumulated_turnover": 10051385,
        "account_executive": 36047,
        "daily_turnover": 10043103
    },
    {
        "accumulated_turnover": 9938977,
        "account_executive": 52645,
        "daily_turnover": 9931902
    },
    {
        "accumulated_turnover": 10154452,
        "account_executive": 67505,
        "daily_turnover": 10151894
    },
    {
        "accumulated_turnover": 9942849,
        "account_executive": 44040,
        "daily_turnover": 9934846
    },
    {
        "accumulated_turnover": 9930808,
        "account_executive": 72671,
        "daily_turnover": 9923023
    },
    {
        "accumulated_turnover": 10029750,
        "account_executive": 41767,
        "daily_turnover": 10024658
    },
    {
        "accumulated_turnover": 9993190,
        "account_executive": 64791,
        "daily_turnover": 9987283
    },
    {
        "accumulated_turnover": 9998948,
        "account_executive": 35216,
        "daily_turnover": 9990394
    },
    {
        "accumulated_turnover": 10043389,
        "account_executive": 88342,
        "daily_turnover": 10035450
    },
    {
        "accumulated_turnover": 10035191,
        "account_executive": 80035,
        "daily_turnover": 10027880
    },
    {
        "accumulated_turnover": 9911904,
        "account_executive": 12664,
        "daily_turnover": 9910378
    },
    {
        "accumulated_turnover": 10107542,
        "account_executive": 64570,
        "daily_turnover": 10102083
    }
];
 
let i = 1;
const entryPerPage  = 10;
const columns = [
    {
        name: ' ',
        selector: 'index',
        cell: row => { if (i > entryPerPage) i=1; return i++ },
        sortable: false,
        width: "50px",
        compact: true
    },
    {
        name: 'Account Executive',
        selector: 'account_executive',
        sortable: true
    },
    {
        name: 'Daily Turnover',
        selector: 'daily_turnover',
        sortable: true
    },
    {
        name: 'Accumulated Turnover',
        selector: 'accumulated_turnover',
        sortable: true
    }
    
    
];


class Securities extends Component {
    state = {
        securities: []
    }

    componentDidMount() {
         this.getSecurities();
        this.timeIntID = setInterval(() => {
            this.getSecurities();
        }, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.timeIntID);
    }
    
    getSecurities = () => {
        axios.get('http://rtq.chicheongweng.com:3000/securities')
            .then(res => this.setState({ securities: res.data }))
            .catch((error) => {
                  console.log("error occured: ", error.message)
            });
    }

    render() {
        console.log("this.securities: ", this.state.securities);
        /*For dev when service not uvailable*/
       // const securities_data = this.state.securities.length > 0 ? this.state.securities : data;
        /*Enable below for server data use only*/
        const securities_data = this.state.securities;
       

        return (
            <div>
            <Clock />
            <DataTable
                    columns={columns}
                    data={securities_data}
                    customTheme={tableTheme}
                    pagination={true}
                    responsive={true}
                    noHeader={true}
                />
             </div>
        );
    }
}

const tableTheme = {
    rows: {
        height: '25px'
    },


}

export default Securities;