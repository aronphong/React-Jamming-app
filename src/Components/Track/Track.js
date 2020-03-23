import React from 'react'
import './Track.css';

export class Track extends React.Component {
    constructor(props) {
        super(props);
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
    }

    renderAction() {
        if (this.props.isRemoval) {
            return <button className="Track-action" onClick={this.removeTrack}> - </button>
        } else {
            return <button className="Track-action" onClick={this.addTrack}> + </button>
        };
    }

    removeTrack() {
        this.props.onRemove(this.props.track)
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
                {this.renderAction()}
            </div>
        );
    }
}