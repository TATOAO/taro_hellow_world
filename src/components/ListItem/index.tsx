import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import './index.scss';

interface ListItemProps {
  className?: string;
  children?: React.ReactNode;  // Assuming children might be any valid React node
}

interface ListItemState {
  // Define state here if needed, currently empty since the original JS did not use state
}

/*
export default class ListItem extends Component<ListItemProps, ListItemState> {
  static options = {
    addGlobalClass: true,
  };

  static defaultProps = {
    className: '',
  };

  componentWillMount() {
    // Any specific typescript logic can be added here
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className={this.props.className + ' list-item'}>
        <View className='flex row middle'>
          <View className='flex-1 flex row middle'>{this.props.children}</View>
          <View className='iconfont icon-angle-right font30 iconmore'></View>
        </View>
      </View>
    );
  }
}

*/

export default function ListItem(props) {
    return (
      <View className={'list-item'}>
        <View className='flex row middle'>
          <View className='flex-1 flex row middle'></View>
          <Text> {props.text} </Text>
          <View className='iconfont icon-angle-right font30 iconmore'></View>
        </View>
      </View>
    );
  }



/*
export default class Cexample extends Component {
  render() {
    return (
      <View className="c">
        <Text>c component</Text>
      </View>
    )
  }
}

*/
