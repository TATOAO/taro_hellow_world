import { View, Text, Icon, Button, Image } from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro'
import './index.scss'
import logo_image from '../../assets/images/logo.png';

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  });

  return (
    <View className='index'>
      <View style={{ margin: '20px', fontSize: '24px', color: 'black', textAlign: 'center' }}>
                小程序还在开发中
      </View>
      <View style={{ margin: '20px', fontSize: '24px', color: 'black', textAlign: 'center' }}>
                敬请谅解
      </View>
      <Button className='btn-max-w' plain onClick={
      () => {
          console.log("heehowiejf");
          Taro.navigateTo({
            url: '/pages/contact/tatoao'
          });
        }
      }>联系我们</Button>
    </View>
  )
}
