import React from 'react';
import "./Content.css";
import Year from "../Year/Year";
import Month from "../../components/Month/Month";
import Day from "../../components/Day/Day";










function Section() {
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return (
        <section className="weekdays row">
            {weekdays.map((v, k) =>
                <h3 className="colume" key={weekdays[k]}>{weekdays[k]}</h3>
            )}
        </section>
    )
}







// class Year extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             now_year: new Date().getFullYear(),
//             start_year: 2015
//         }
//     }
//     onChange = (e) => {
//         // console.log(this.state.start_year,this.props.cur_year)
//         this.props.onYearChange(e)
//     }

//     render() {
//         console.log("render Day");
//         // console.log(this.state.start_year,this.props.cur_year)

//         var num = this.state.now_year - this.state.start_year;
//         return (
//             <h4>
//                 <select className="select" onChange={(e) => this.onChange(e)}  >
//                     {Array.from(Array(num), (v, k) => v).map((v, k) =>
//                         <option className="" value={2019 - k} key={k}>{this.state.now_year - k}</option>
//                     )}
//                 </select>
//             </h4>
//         )
//     }
// }


// class Month extends React.Component {
//     handleClick = (e) => {
//         // let month = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
//         // console.log(e.target.innerHTML, month.indexOf(e.target.innerHTML));
//         this.props.onMonthChange(e.target.innerHTML)
//     }

//     render() {
//         // console.log("render Month " + this.props.cur_month)
//         let month = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
//         return (
//             <div>
//                 <table className="month_table">
//                     <tbody>
//                         {Array.from(Array(6), (v, k) => k).map((v, k) =>
//                             <tr key={k}>
//                                 {[1, 2].map((m, n) =>
//                                     <td onClick={this.handleClick} key={month[k * 2 + n]} className={k * 2 + n == this.props.cur_month ? 'cur' : ""}>{month[k * 2 + n]}</td>
//                                 )}
//                             </tr>
//                         )}
//                     </tbody>
//                 </table>

//             </div>
//         )
//     }
// }

// class Day extends React.Component {
//     //culculate date by this.props
//     date() {
//         var result;
//         var monthDaySum = (this.props.cur_year % 4) == 0 ? [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] : [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//         var firstDay = new Date(this.props.cur_year, this.props.cur_month, 1).getDay() % 7;
//         if (this.props.row == 0 && this.props.colume < firstDay) {
//             if ((this.props.cur_month + 11) % 12 !== 11) {
//                 result = new Date(this.props.cur_year, (this.props.cur_month + 11) % 12, monthDaySum[(this.props.cur_month + 11) % 12] + this.props.colume - firstDay + 1)
//             } else {
//                 result = new Date(this.props.cur_year - 1, (this.props.cur_month + 11) % 12, monthDaySum[(this.props.cur_month + 11) % 12] + this.props.colume - firstDay + 1)
//             }
//         }
//         else {
//             result = new Date(this.props.cur_year, this.props.cur_month, this.props.row * 7 + this.props.colume - firstDay + 1)
//         }
//         return result
//     }

//     //is the date weekend?
//     render() {
//         return (
//             <div className={"colume " + (([6, 0].indexOf(this.date().getDay()) > -1) ? "weekends" : "workdays")}>
//                 <div className="left record">
//                     <h5 className="record_date">{(this.date().getMonth() < 9 ? "0" : "") + (this.date().getMonth() + 1) + "-" + (this.date().getDate() < 10 ? "0" : "") + this.date().getDate()}</h5>
//                     <ul>
//                         {this.props.record.map((v, k) =>
//                             <li key={k}>{v}</li>)}
//                     </ul>
//                 </div>
//                 <div className="right status">{
//                     this.props.status == "" ? "" : <span className="status_text">{this.props.status}</span>
//                 }
//                 </div>
//             </div>
//         )
//     }
// }


class Content extends React.Component {
    constructor() {
        super();
        var time = new Date();
        this.state = {
            // now:time,
            cur_year: time.getFullYear(),
            cur_month: time.getMonth(),
            date: time.getDate(),
            record: ['08:13:52',
                '08:15:32',
                '15:05:58',
                '15:08:08'],
            status: "",
            day: time.getDay()
        };
    }

    onMonthChange = (msg) => {
        let month = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
        this.setState({
            cur_month: month.indexOf(msg)
        });
    }

    onYearChange = (e) => {
        // console.log("Father state modify_func");
        // console.log(msg)
        // console.log(e.target,typeof(e.target));
        this.setState({
            cur_year: e.target.value
        });

    }

    render() {
        // console.log('render' + this.state.cur_month);
        return (
            <div className="content">
                <div className="leftBar left">
                    <Year {...this.state} onYearChange={this.onYearChange} />
                    <Month {...this.state} onMonthChange={this.onMonthChange} />
                    <div>
                        <ul>
                            <li>请使用最新版本浏览器以便获取最佳效果</li>
                            <li>旧版本，请猛击<a href="QueryOwnResult.aspx">这里</a></li>
                            <li>问题或建议，请猛击<a target="_blank" href="mailto:William.Luo@grapecity.com?subject=issue/suggestion about TimeCard&amp;cc=william.luo@grapecity.com">这里</a></li>
                        </ul>
                    </div>
                </div>
                <div className="rightBar right">
                    <Section />
                    {Array.from(Array(6), (v, k) => k).map((v, k) =>
                        <div className="row">
                            {Array.from(Array(7), (m, n) => n).map((m, n) =>
                                <Day key={n} {...this.state} row={k} colume={n} />
                            )}
                        </div>

                    )}

                </div>
            </div>
        )
    }


}



export default Content;