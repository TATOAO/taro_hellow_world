import { View, Text, Icon, Button } from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro'
import './index.scss'

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  });

  return (
    <View className='index'>
      <Text>Hello world! TATOAO</Text>
      <Button className='btn-max-w' plain type='primary' onClick={
      () => {
          console.log("heehowiejf");
          Taro.navigateTo({
            url: '/pages/pageview/PageView'
          });
        }
      }>按钮</Button>
    </View>
  )
}
