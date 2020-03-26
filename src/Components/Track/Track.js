import React from 'react'
import './Track.css';

export class Track extends React.Component {
    constructor(props) {
        super(props);
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
    }

    removeTrack() {
        this.props.onRemove(this.props.track)
    }

    addTrack() {
        this.props.onAdd(this.props.track)
    }

    render() {
        let button;
        if (this.props.isRemoval) {
            button = <button className="Track-action" onClick={this.removeTrack}>-</button>
        } else {
            button = <button className="Track-action" onClick={this.addTrack}>+</button>
        }

        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.name}</h3>
                    <p>{this.props.artist} | {this.props.album}</p>
                </div>
                {button}
            </div>
        );
    }
}