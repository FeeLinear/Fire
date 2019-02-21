import Ribbon from './Ribbon/ribbon'
import './index.scss'
export default class Fire {
  constructor(props){
    this._default = {
      container: '#fire_container',
      ribbonNum: 10,
      fireType: 'rightFire',
      duration: 5000,
      maxRibbonNum: 50
    }
    this.options = Object.assign({}, this._default, props);
    this.container = document.querySelector(this.options.container);
  }
  active(){
    this.createRibbons()
  }
  createRibbons(){
    let existenceRibbonNum = this.container.querySelectorAll('.ribbon').length;
    let ribbonNum = this.options.ribbonNum;
    if( existenceRibbonNum >= this.options.maxRibbonNum){
      return;
    }else if(existenceRibbonNum <= 1){
      ribbonNum = 2 * this.options.ribbonNum;
    }

    let timer = setInterval(() => {
      let ribbon = new Ribbon();
      this.container.appendChild(ribbon.dom);
      setTimeout(()=>{
        ribbon.dom.style.left = 80 + Math.random() * 150 + 'px';
        ribbon.img.style.bottom = -(100 + Math.random() * 100) + 'px';
        ribbon.img.classList.add('rotating');
      }, 50)
      ribbon.timer = setTimeout(() => {
        ribbon.destroy();
        ribbon = null;
      }, this.options.duration / 6 * 5)
      ribbonNum--
      if(ribbonNum <= 0){
        clearInterval(timer);
      }
    }, 100)
  }
}
