import React, { Component } from 'react';

export default class Cover extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            width: 1080,
            height: 600,
        };
    }

    componentDidMount() {
        var w = window.innerWidth;
        var h = window.innerHeight;

        this.setState({
            width: w,
            height: h-50,
        })
    }
    render() {
        return (
            <div className="container">
                <iframe className="responsive-iframe" width={this.state.width} height={this.state.height} id="gmap_canvas" src="https://maps.google.com/maps?q=-6.9888801,%20112.4973399&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            </div>
        );
    }
}