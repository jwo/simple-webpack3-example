import {hi} from './yolo'
import moment from 'moment'

const main = document.querySelector(".main")
main.insertAdjacentHTML("beforeEnd", `
  <h1>It is now: ${moment().format("lll")}</h1>
  <h2>value from imported: ${hi}</h2>
`)
