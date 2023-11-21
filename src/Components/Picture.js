import React, { Component } from 'react';

class Picture extends Component {
    render() {
        return (
            <div>
                <hr/>
                {this.props.id}
                {/* create from to add object Picture { bookId: 0, imageUrl: ''}
                generate POST request to 'http://localhost:5221/api/pictures' */}
            </div>
        );
    }
}

export default Picture;