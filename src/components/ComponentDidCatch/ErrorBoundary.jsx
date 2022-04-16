import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { error: null, errorInfo: null };
    }
    
    componentDidCatch(error, errorInfo) {
      // 你同样可以将错误日志上报给服务器
      console.log(error,'=====>',errorInfo)
      // Catch errors in any components below and re-render with error message
      
      // You can also log error messages to an error reporting service here
    }

    static getDerivedStateFromError(error) {
      // 更新 state 使下一次渲染能够显示降级后的 UI
      console.log(error,'=====>');
      return {
        error,
        errorInfo: {}
      };
    }

    
    render() {
      if (this.state.errorInfo) {
        return (
          <div>
            <h2>Something went wrong.</h2>
            <details style={{ whiteSpace: 'pre-wrap' }}>
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.errorInfo.componentStack}
            </details>
          </div>
        );
      }
      return this.props.children;
    }
}

