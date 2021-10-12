import "./styles/css/index.css";
import { Component } from "react";
import { Colors, IColor } from "./constanta";
import ListColor from "./components/ListColor";
import { computeSaturation, convertHexToRgb } from "./helper";

interface IProp { }
interface IState {
  colors: IColor[];
}

class App extends Component<IProp, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      colors: Colors.map(Color => {
        const rgb: number[] = convertHexToRgb(Color.hex)
        return {
          ...Color,
          red: rgb[0],
          green: rgb[1],
          blue: rgb[2],
          saturation: computeSaturation(rgb[0], rgb[1], rgb[2])
        }
      })
    }
  }

  //Set default colors to local storage
  componentDidMount() {
    localStorage.setItem("colors", JSON.stringify(this.state.colors));
  }

  render() {
    return (
      <div>
        <div className="App">
          <h1 className="">Gallery of Colored Squares</h1>
        </div>
        <ListColor colors={this.state.colors} />
      </div>
    );
  }
}

export default App;
