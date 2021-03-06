// Code EyesOnMe Component Here
import React, {Component} from "react"

class EyesOnMe extends Component {

    focus = () => console.log("Good!")

    blur = () => {
        console.log("Hey! Eyes on me!")
    }
    


    render() {
        return(
            <div>
                <button onBlur={ this.blur} onFocus={ this.focus }>Eyes On Me!</button>
            </div>
        )
    }
}

export default EyesOnMe