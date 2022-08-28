import { Component } from 'react';
import { ImageWrapper } from './style';

interface IProps {}

export default class CartImageBox extends Component<IProps, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return <ImageWrapper></ImageWrapper>;
  }
}
