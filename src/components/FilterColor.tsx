import { Component } from "react";

interface IProp {
    onChecked(checkedValue: string, isChecked: boolean): any;
}
interface IState { }
class FilterColor extends Component<IProp, IState> {

    //As event listener when all of filters are checked to get the value.
    handleChange = (e: any) => {
        //Return value to parent component <ListColor Component>
        this.props.onChecked(e.target.value, e.target.checked);
    };

    render() {
        return (
            <div className="Filter">
                <input type="checkbox" onChange={this.handleChange} value="red"/>
                <label className="label">Red {">"} 50%</label>
                <input type="checkbox" onChange={this.handleChange} value="green"/>
                <label className="label">Green {">"} 50%</label>
                <input type="checkbox" onChange={this.handleChange} value="blue"/>
                <label className="label">Blue {">"} 50%</label>
                <input type="checkbox" onChange={this.handleChange} value="saturation"/>
                <label className="label">Saturation {">"} 50%</label>
            </div>
        )
    }

}

export default FilterColor;