import React, { Component } from 'react';

class AdminMainAllTemplate extends Component {
    render() {   // render를 해야 props를 가져올수 있다. (즉, class형이여야한다.)
        return (
            <div className="entire-container">
              <div className="side">
                {this.props.side}
             </div> 
             <div className="main">
                 {this.props.main}
              </div>
         </div>
        );
    }
}

export default AdminMainAllTemplate;

