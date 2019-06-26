import React from 'react';



class Month extends React.Component {
    handleClick = (e) => {
        // let month = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
        // console.log(e.target.innerHTML, month.indexOf(e.target.innerHTML));
        this.props.onMonthChange(e.target.innerHTML)
    }

    render() {
        // console.log("render Month " + this.props.cur_month)
        let month = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
        return (
            <div>
                <table className="month_table">
                    <tbody>
                        {Array.from(Array(6), (v, k) => k).map((v, k) =>
                            <tr key={k}>
                                {[1, 2].map((m, n) =>
                                    <td onClick={this.handleClick} key={month[k * 2 + n]} className={k * 2 + n == this.props.cur_month ? 'cur' : ""}>{month[k * 2 + n]}</td>
                                )}
                            </tr>
                        )}
                    </tbody>
                </table>

            </div>
        )
    }
}
export default Month;