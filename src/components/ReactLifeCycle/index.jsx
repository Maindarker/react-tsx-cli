import React, { Component } from 'react';
import './index.scss';

class ReactLifeCycle extends Component {
    constructor(props){
        super(props);
        this.state = {
            isDisplayText: false,
            checkBoxList: []
        }
    }
    
    static getDerivedStateFromProps(props, state){
        console.log('getDerivedStateFromProps');
        return {
            ...state,
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, preveState) {
        /**
         * 它使得组件能在发生更改之前从 DOM 中捕获一些信息（例如，滚动位置）。
         * 此生命周期方法的任何返回值将作为参数传递给 componentDidUpdate()。
         */
        console.log('getSnapshotBeforeUpdate');
        return null
    }

    componentDidUpdate(prevProps, preveState, snapShot) {
        console.log('componentDidUpdate');
    }

    componentDidMount(){
        console.log('componentDidMount');
        document.querySelector('.reverse').style.background = "#f00"
        // this.setState({
        //     isDisplayText: true
        // })
    }

    componentWillUnmount(){
        console.log('unmount')
    }

    handClickAddButton = (e) => {
       const newCheckList = this.state.checkBoxList;
       const con = Date.now();
       newCheckList.unshift({
           id: `${con}`,
           name: con,
           checked: false,
       })
       this.setState({
           checkBoxList: newCheckList
       })
    }

    handClickRmvButton = (e) => {
        const newCheckList = this.state.checkBoxList;
        newCheckList.shift();
        this.setState({
            checkBoxList: newCheckList
        })
    }

    handClickEvent = () => {
        // console.log('div')
    }

    handleOnchange = (item, index) => {
        // const { checkBoxList } = this.state;
        // checkBoxList[index].checked = !checkBoxList[index].checked;
        // const newCheckList = [...checkBoxList]
        // this.setState({
        //     checkBoxList: newCheckList
        // })
    }

    handleReverse = () => {
        const newCheckList = this.state.checkBoxList;
        newCheckList.reverse()
        this.setState({
            checkBoxList: newCheckList
        })
    }

    render() {
        console.log('render');
        const { isDisplayText, checkBoxList } = this.state;
        return (
            <div className="react-lifecycle" onClick={this.handClickEvent}>
                {isDisplayText && <button onClick={(e) => {this.handClickAddButton(e)}}>add one</button>}
                <button onClick={(e) => {this.handClickRmvButton(e)}}>rmv one</button>
                <button onClick={(e) => {this.handleReverse(e)}} className="reverse">reverse</button>
                {/* <div className="text" style={{display: isDisplayText ? 'block' : 'none'}}>I come in</div> */}
                <ul>
                    {
                        checkBoxList.map((item,index) => {
                            return <li key={item.id}>
                                {item.name}
                                <input type="checkbox"  onChange={() => {this.handleOnchange(item,index)}}/>
                            </li>
                        })
                    }
                </ul>
            </div>
        );

        // const virDom = React.createElement('div', {
        //         className: 'react-lifecycle',
        //         onClick: this.handClickEvent
        //     },React.createElement('button', {
        //         onClick: this.handClickButton,
        //     },'click me'), isDisplayText && React.createElement('div', {
        //         className: 'text',
        //     },'I come in')
        // );
        // console.log(virDom);
        // return virDom;
    }
}

export default ReactLifeCycle;
