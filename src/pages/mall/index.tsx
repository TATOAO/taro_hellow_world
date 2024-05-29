import { View, Text, Icon, Button } from '@tarojs/components'
import Taro, { Component, useLoad } from '@tarojs/taro'


import Cexample from "../../components/ListItem/index.tsx";
import ListItem from "../../components/ListItem/index_b.tsx";
import Shit from "../../components/ListItem/index_c.tsx";
import './index.scss'

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.');
  });

  return (
          <Shit text= "ssss">
          </Shit>
  )
}
