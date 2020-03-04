import React, { Component } from 'react';
import SidePopupTemplate from '../../../components/popupInfo/Store'

class SidePopupContainer extends Component {
       // popup store 정보
       constructor(prosp){
        super();
        this.state = {
          store : {
            "id" : "1", 
            "store" : "aaa",
            "test" : "test01"
          }
        }
      }

      // db데이터 가져오기

    render() {
        return (
        <SidePopupTemplate
            id={this.state.store.id}
            store={this.state.store.store}
            test={this.state.store.test}
        />
        );
    }
}

export default SidePopupContainer;