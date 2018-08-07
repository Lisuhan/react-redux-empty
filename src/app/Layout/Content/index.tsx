import React from 'react';
interface Props{
  children: React.ReactNode
}
export default class Content extends React.PureComponent<Props, any>{
  render() {
    return  <section>{this.props.children}</section>
  }
}