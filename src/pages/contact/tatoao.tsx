import { View, Text, Icon, Image } from '@tarojs/components';
import theimage from '../../assets/images/contact/tatoao.png';

export default function Index() {
  return (
    <View className='qrcode-page'>
        <Image
          style='width: 400px;height: 550px;background: #fff;'
          src={theimage}
          show-menu-by-longpress="{{true}}"
        />
    </View>
  )
}

