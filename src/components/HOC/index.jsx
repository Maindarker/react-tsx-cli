import React, { useState, useEffect } from 'react';
import { BrowserRouter, HashRouter, MemoryRouter } from 'react-router-dom'

const renderQueue = []
let isFirstrender = true

const tryRender = ()=>{
  const render = renderQueue.shift()
  if(!render) return
  setTimeout(()=>{
    render() /* 执行下一段渲染 */
  },1000)
} 
/* HOC */
function renderHOC(WrapComponent){
    return class Index extends React.Component {
    //   const [ isRender , setRender ] = useState(false)
      state = {
          isRender: false
      }
      
      componentDidMount() {
        renderQueue.push(()=>{
            /* 放入待渲染队列中 */
              this.setState({
                  isRender: true
              })
            })
            if(isFirstrender) {
              tryRender()
              isFirstrender = false
            }
      }
      
      render(){
          const { isRender } = this.state;
        return isRender ? 
        <WrapComponent tryRender={tryRender}  { ...this.props }/> :
         <div className='box' ><div className="icon" >{this.props.name}</div></div>
      }
    }
}
/* 业务组件 */
class Index extends React.Component{
  componentDidMount(){
    const { name , tryRender} = this.props
    /* 上一部分渲染完毕，进行下一部分渲染 */
    tryRender()
    console.log(name+'渲染')
  }
  render(){
    return <div>
        <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=294206908,2427609994&amp;fm=26&amp;gp=0.jpg" />
    </div>
  }
}
/* 高阶组件包裹 */
const Item = renderHOC(Index)

export default () => {
  return <React.Fragment>
      <Item name="组件一" />
      <Item name="组件二" />
      <Item name="组件三" />
  </React.Fragment>
}

