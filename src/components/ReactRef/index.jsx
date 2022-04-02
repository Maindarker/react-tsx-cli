import React, { userEffect, useRef, useEffect, useState, Component} from 'react';
import MiddleComponent from './MiddleComponent'
import UseImperativeHandle from './UseImperativeHandle';

class ClassRef extends Component {
    classRef = React.createRef()
    state = {
        isDisplay: false,
    }

    //1、ref在class组件获取的是组件实例
    //2、createRef则会返回一个包含current属性的对象 组件实例被绑定到current身上
    //3、ref在函数组件中 没有实例一说

    componentDidMount(){
        console.log(this.classRef)
    }

    componentDidUpdate(){
        // console.log(this.classRef)
    }

    handleClick = () => {
        this.setState({
            isDisplay: true,
        });
    }

    render() {
        return (
            <div onClick={this.handleClick} style={{height: '100vh'}}>
                <MiddleComponent ref1={this.classRef}/>
                {/* <div ref={this.classRef}/> */}
            </div>
        );
    }
}


const hookRef = React.createRef();
const HooksRef = () => {
    const [isDisplay, setDisplay] = useState(false)
    const [count, setCount] = useState(0);
    const hookRef = useRef(null);
    console.log(hookRef)

    const handleClick = () => {
        hookRef.current.focus();
        setDisplay(true);
    }

    useEffect(() => {
        // console.log(hookRef)
    }, [1]);
    
    return (
        <div onClick={handleClick} style={{height: '100vh'}}>
            <UseImperativeHandle count={count} ref={hookRef}/>
            <MiddleComponent ref={hookRef} isDisplay={isDisplay}/>
        </div>
    );
}

export default ClassRef;