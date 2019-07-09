import style from './index.css'
import axios from 'axios'
import md5 from 'md5'

const Main = () => {
  axios.post('https://huangqm.xyz/php/sig.php', {
    sig: md5('ming' + 'test' + 'www'),
    s: 'www',
    d: 'test'
  })
    .then(function (res) {
      console.log(res)
    })
    .catch(function (error) {
      console.log(error)
    })
  return <div className={style.test}>按钮</div>
}
export default Main
