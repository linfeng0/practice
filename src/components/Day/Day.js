import React from 'react';

class Day extends React.Component {
    //culculate date by this.props
    date() {
        var result;
        var monthDaySum = (this.props.cur_year % 4) == 0 ? [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] : [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        var firstDay = new Date(this.props.cur_year, this.props.cur_month, 1).getDay() % 7;
        if (this.props.row == 0 && this.props.colume < firstDay) {
            if ((this.props.cur_month + 11) % 12 !== 11) {
                result = new Date(this.props.cur_year, (this.props.cur_month + 11) % 12, monthDaySum[(this.props.cur_month + 11) % 12] + this.props.colume - firstDay + 1)
            } else {
                result = new Date(this.props.cur_year - 1, (this.props.cur_month + 11) % 12, monthDaySum[(this.props.cur_month + 11) % 12] + this.props.colume - firstDay + 1)
            }
        }
        else {
            result = new Date(this.props.cur_year, this.props.cur_month, this.props.row * 7 + this.props.colume - firstDay + 1)
        }
        return result
    }

    //is the date weekend?
    render() {
        return (
            <div className={"colume " + (([6, 0].indexOf(this.date().getDay()) > -1) ? "weekends" : "workdays")}>
                <div className="left record">
                    <h5 className="record_date">{(this.date().getMonth() < 9 ? "0" : "") + (this.date().getMonth() + 1) + "-" + (this.date().getDate() < 10 ? "0" : "") + this.date().getDate()}</h5>
                    <ul>
                        {this.props.record.map((v, k) =>
                            <li key={k}>{v}</li>)}
                    </ul>
                </div>
                <div className="right status">{
                    this.props.status == "" ? "" : <span className="status_text">{this.props.status}</span>
                }
                </div>
            </div>
        )
    }
}


export default Day;