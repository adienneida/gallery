import { Component } from "react"

interface IProp {
    onInput(colorName: string): any;
}

interface IState {
    inputName: string;
    message: string;
    success?: boolean;
}

class AddColor extends Component<IProp, IState> {
    constructor(props: IProp) {
        super(props);
        this.state = {
            inputName: '',
            message: ''
        }
    }

    //This method will be called as event listener input color
    handleChange = (e: any) => {
        this.setState({ inputName: e.target.value.toUpperCase() });
    };

    //Used to close alert
    closeAlert() {
        this.setState({ message: '' });
    }

    //This method is used to validate format from input color
    validateInput() {
        if (this.state.inputName.length !== 7) {
            this.setState({ message: 'Your input is not valid. It must contains 7 characters.'});
        } else {
            const prefix: string = this.state.inputName.substring(0,1);
            const hexColor: string = this.state.inputName.substring(1);

            //Regex for Valid Characters i.e. Alphabets, Numbers and Space.
            const regex = /^[A-Fa-f0-9 ]+$/
            if (prefix !== '#') {
                this.setState({ message: "Input color must begin '#' characters."});
            } else if (!regex.test(hexColor)) {
                this.setState({ message: "Your input is invalid format."});
            } else {
                this.setState({ message: "The color has saved successfully.", success: true });
                this.props.onInput(this.state.inputName.toUpperCase());
            }
        }
    }

    render() {
        return (
            <div className="Add">
                <div>
                    <p 
                        className={this.state.success ? 'success' : 'error'} 
                        hidden={this.state.message === '' ? true : false}>
                            {this.state.message}
                            <span className="close" onClick={() => this.closeAlert()}>x</span>
                    </p>
                </div>
                <label className="label">Add new color:</label>
                <input className="input" type="text" name="name" value={this.state.inputName} onChange={this.handleChange} />
                <button className="btn" onClick={() => this.validateInput()}>Add</button>
            </div>
        )
    }
}

export default AddColor;