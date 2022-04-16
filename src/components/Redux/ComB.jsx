import React, { useEffect, useLayoutEffect, useState } from 'react';
import { connect } from 'react-redux'

const Hooks = (props)  => {
    console.log(props)

    useEffect(() => {
        // document.querySelector('.dd').style.backgroundColor = '#f00';
    }, []);

    useLayoutEffect(() => {
        document.querySelector('.dd').style.backgroundColor = '#f00';
    }, [])

    const handleClick = () => {
       props.onClick(222)
    }
    return (
        <div onClick={handleClick} className="dd" style={{backgroundColor: '#fff'}}>
            {props.name}
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    // console.log(ownProps)
    return {
        name: state.name
    }
  }

  const mapDispatchToProps = (
    dispatch,
    ownProps
  ) => {
    //   console.log(ownProps)
    return {
      onClick: () => {
        dispatch({
          type: 'ADD',
          payload: 1
        });
      }
    };
  }

//   const mapDispatchToProps = {
//     onClick: (s) => {
//         return { type: "ADD", payload: 1 }
//     }
//   }

export default connect(mapStateToProps, mapDispatchToProps)(Hooks);
