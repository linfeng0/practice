import React from 'react';

class Year extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            now_year: new Date().getFullYear(),
            start_year: 2015
        }
    }
    onChange = (e) => {
        // console.log(this.state.start_year,this.props.cur_year)
        this.props.onYearChange(e)
    }

    render() {
        console.log("render Day");
        // console.log(this.state.start_year,this.props.cur_year)

        var num = this.state.now_year - this.state.start_year;
        return (
            <h4>
                <select className="select" onChange={(e) => this.onChange(e)}  >
                    {Array.from(Array(num), (v, k) => v).map((v, k) =>
                        <option className="" value={2019 - k} key={k}>{this.state.now_year - k}</option>
                    )}
                </select>
            </h4>
        )
    }
}
export default Year;