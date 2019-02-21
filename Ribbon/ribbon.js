import ribbon_01 from './images/ribbon_01.png'
import ribbon_02 from './images/ribbon_02.png'
import ribbon_03 from './images/ribbon_03.png'
import ribbon_04 from './images/ribbon_04.png'
import ribbon_05 from './images/ribbon_05.png'
import ribbon_06 from './images/ribbon_06.png'
import ribbon_07 from './images/ribbon_07.png'
import ribbon_08 from './images/ribbon_08.png'
import ribbon_09 from './images/ribbon_09.png'
import ribbon_10 from './images/ribbon_10.png'
import ribbon_11 from './images/ribbon_11.png'
import ribbon_12 from './images/ribbon_12.png'
import ribbon_13 from './images/ribbon_13.png'
import snacks_14 from './images/snacks_14.png'
import logo_15 from './images/logo_15.png'
import './ribbon.scss'
export default class Ribbon {
  constructor(){
    this.imgData = [
      {
        src: ribbon_01
      },
      {
        src: ribbon_02
      },
      {
        src: ribbon_03
      },
      {
        src: ribbon_04
      },
      {
        src: ribbon_05
      },
      {
        src: ribbon_06
      },
      {
        src: ribbon_07
      },
      {
        src: ribbon_08
      },
      {
        src: ribbon_09
      },
      {
        src: ribbon_10
      },
      {
        src: ribbon_11
      },
      {
        src: ribbon_12
      },
      {
        src: ribbon_13
      },
      {
        src: snacks_14
      },
      {
        src: logo_15
      }
    ];
    this._init()
  }
  _init(){
    this.img = new Image();
    this.dom = document.createElement('div');
    this.dom.className = 'ribbon';
    this.img.onload = () => {
      this.dom.style.width = this.img.width / 2 + 'px';
      this.dom.style.height = this.img.height / 2 + 'px';
      this.dom.appendChild(this.img);
    }
    let ribbon = this.imgData[parseInt(Math.random() * (this.imgData.length - 2))];  //不随机到零食跟logo图片
    let random_ = Math.random();
    if(random_ < 0.02){
      ribbon = this.imgData[this.imgData.length - 1]  //1%的概率出logo
    }
    if(random_ < 0.01){
      ribbon = this.imgData[this.imgData.length - 2]  //1%的概率出零食
    }
    this.img.src = ribbon.src;
  }
  destroy(){
    this.dom.parentNode.removeChild(this.dom);
  }
}
