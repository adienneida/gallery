import React, { Component } from "react";
import { IColor } from "../constanta";
import { computeSaturation, convertHexToRgb } from "../helper";
import AddColor from "./AddColor";
import FilterColor from "./FilterColor";

interface IProp {
    colors: {
        hex: string; //It contains a hex color value.
        removable: boolean; //To control removable color.
    }[]
}


interface IState {
    colors: IColor[]; //As a variable to save default colors. It helps to reset the filtered data.
    filterColors: IColor[]; //This is used to store a filtered colors.
    filters: string[]; //It contains any value to filter the data of colors.
}

class ListColor extends Component<IProp, IState> {
    constructor(props: IProp) {
        super(props);
        this.state = {
            colors: this.props.colors,
            filterColors: this.props.colors,
            filters: []
        }
    }

    //This method is used to add new color to state
    addColor(hexColor: string) {
        const rgb: number[] = convertHexToRgb(hexColor);
        this.setState({
            colors: [
                ...this.state.colors,
                {
                    hex: hexColor,
                    removable: true,
                    red: rgb[0],
                    green: rgb[1],
                    blue: rgb[2],
                    saturation: computeSaturation(rgb[0], rgb[1], rgb[2])
                }
            ],
            filterColors: [
                ...this.state.filterColors,
                {
                    hex: hexColor,
                    removable: true,
                    red: rgb[0],
                    green: rgb[1],
                    blue: rgb[2],
                    saturation: computeSaturation(rgb[0], rgb[1], rgb[2])
                }
            ]
        })

        this.updateColors(this.state.filters);
    }

    //Used to remove color from list
    removeColor(keyIndex: number) {
        this.setState({
            colors: this.state.colors.filter((color, index) => index !== keyIndex),
            filterColors: this.state.filterColors.filter((color, index) => index !== keyIndex),
        })
    }

    //This method is used to set state of colors and re-render the list of colors
    updateColors(filters: string[]) {
        let colors: IColor[] = this.state.filterColors;
        if (filters.includes("red")) {
            colors = this.state.colors.filter(item => item.red && item.red > 50);
        }
        if (filters.includes("green")) {
            colors = this.state.colors.filter(item => item.green && item.green > 50);
        }
        if (filters.includes("blue")) {
            colors = this.state.colors.filter(item => item.blue && item.blue > 50);
        }
        if (filters.includes("saturation")) {
            colors = this.state.colors.filter(item => item.saturation && item.saturation > 50);
        }

        this.setState({
            filterColors: filters.length <= 0 ? this.state.colors : colors
        })
    }

    //Used to update filter
    addFilter(filterValue: string, isChecked: boolean) {
        let filters = [...this.state.filters];
        if (isChecked) {
            filters.push(filterValue);
        } else {
            filters = filters.filter(item => item !== filterValue)
        }
        this.setState({
            filters
        });

        this.updateColors(filters);
    }

    render() {
        return (
            <div>
                <AddColor onInput={(hexColor) => this.addColor(hexColor)}/>
                <FilterColor onChecked={(filterValue, isChecked) => this.addFilter(filterValue, isChecked)}/>
                <div className="List">
                    {this.state.filterColors.map((color, index) => {
                        return (
                            <div key={index}>
                                <div className="content" style={{backgroundColor:color.hex}}></div>
                                <div className="description">
                                    <p>{color.hex}<span className="close" hidden={!color.removable} onClick={() => this.removeColor(index)}>x</span></p>
                                    
                                </div>
                            </div>
                        )
                    })}
    
                </div>
            </div>
        )
    }
}

export default ListColor;