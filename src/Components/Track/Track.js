import React from 'react'
import './Track.css';

export class Track extends React.Component {
    constructor(props) {
        super(props);

        this.addTrack = this.addTrack.bind(this);
    }
    
    renderAction() {
        let isRemoval;
        if (isRemoval) {
            return <button className="Track-action"> - </button>
        } else {
            return <button className="Track-action" onClick={this.addTrack}> + </button>
        };
    }

    addTrack() {
        this.props.onAdd(this.props.track)
    }

    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.name}</h3>
                    <p>{this.props.artist} | {this.props.album}</p>
                </div>
                <button className="Track-action"> + </button>
            </div>
        );
    }
}