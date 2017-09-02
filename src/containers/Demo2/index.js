/******
 * 
 * 在Parent组件挂载之后，过一秒钟，卸载掉Sub组件,这时候会走Sub的componentWillUnmount
 * Sub组件在挂载后，注册一个回调，四秒后访问this  这时候，this仍然是能访问到的
 * *****/
import React from "react";
class Sub extends React.Component {
  constructor(props) {
    super(props);
    this.name = "sub";
  }
  componentWillUnmount() {
    
  }
  componentDidMount() {
    setTimeout(() => {
      this;
      debugger;
    }, 4000);
  }
  render() {
    return <div> i am sub component</div>;
  }
}
class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    };
  }
  componentDidMount() {
    let self = this;
    setTimeout(function() {
      self.setState({ show: false });
    }, 1000);
  }
  render() {
    return (
      <div>
        {this.state.show ? <Sub /> : null}
      </div>
    );
  }
}

export default Parent;