import {
  writeFileSync
} from 'fs'
import axios from 'axios'

import cityMap from './city-map'

const base = 'https://geo.datav.aliyun.com/areas/bound/'

function getJsonFile(map) {
  for (let key in map) {
    const fileName = map[key];
    (async function (fileName) {
      try {
        const res1 = await axios(`${base}${fileName}.json`)
        writeFileSync(`./citys/${fileName}.json`, JSON.stringify(res1.data), 'utf8')
        const res2 = await axios(`${base}${fileName}_full.json`)
        writeFileSync(`./citys/${fileName}_full.json`, JSON.stringify(res2.data), 'utf8')
      } catch (err) {
        console.log(err)
      }
    })(fileName)
  }
}

getJsonFile(cityMap)