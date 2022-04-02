import React, { Component } from 'react';

function Hoc(Component){
    return class WrapComponent extends React.Component{
        constructor(){
          super()
          this.node = null
          this.node = React.createRef()
        }
        UNSAFE_componentWillReceiveProps(nextprops){
            if(nextprops.number !== this.props.number ){
                console.log(this.node)
              this.node.handerNumberChange  &&  this.node.handerNumberChange.call(this.node)
            }
        }
        render(){
            //为包裹组件添加ref 高阶组件可以获取到组件实例
          return <Component {...this.props} ref={this.node}  />
        }
    }
}

class Index extends React.Component{
    handerNumberChange(){
        /* 监听 number 改变 */
        console.log(1)
    }
    render(){
      return <div>hello,world</div>
    }
}

export default Hoc(Index);