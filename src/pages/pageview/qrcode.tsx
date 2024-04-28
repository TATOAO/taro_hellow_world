import { View, Text, Icon } from '@tarojs/components'
import { Barcode, QRCode } from 'taro-code'
import ttt from "../../assets/tatoao.json"


export default function Index() {

  return (
    <View className='qrcode-page'>
        <QRCode
          text={ttt.wechat_qr_url}
          size={300}
          scale={4}
          errorCorrectLevel='M'
          typeNumber={2}
          show-menu-by-longpress="{{true}}"
        />
    </View>
  )
}


