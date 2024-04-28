import { View, Text, Icon, Image } from '@tarojs/components';
import theimage from '../../assets/test.png';

export default function Index() {
  return (
    <View className='qrcode-page'>
        <Image
          style='width: 300px;height: 600px;background: #fff;'
          src={theimage}
          show-menu-by-longpress="{{true}}"
        />
    </View>
  )
}
