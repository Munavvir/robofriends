import { Component } from "react";

class Card extends Component {
    render() {
        return (
            <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
                <img src={'https://robohash.org/'+this.props.id+'?size=200x200'} alt="robot" />
                <div>
                    <h3>{this.props.name}</h3>
                    <p>{this.props.email}</p>
                </div>
            </div>
        );
    }
}

export default Card;