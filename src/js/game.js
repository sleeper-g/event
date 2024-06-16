export class Game {
  constructor( element ) {

    if(typeof element === 'string') {
      element = document.querySelector(element);
    };
    this._element = element;

    this.missValue = document.querySelector('.miss-value');
    this.hitValue = document.querySelector('.hit-value');

    this.onBoxClick = this.onBoxClick.bind(this);
    this._element.addEventListener('click', this.onBoxClick);
  }

  missClick(){
    this.missValue.innerHTML = +this.missValue.innerHTML + 1;
  };

  hitClick(){
    this.hitValue.innerHTML = +this.hitValue.innerHTML + 1;
    this.randomMob();
  };

  onBoxClick(e){
    const target = e.target;

    if(target.classList.contains('mob')){
      this.hitClick();
    } else {
      this.missClick();
    }
  };

  generateid(){
    return Math.floor(Math.random() * 15);
  };

  randomMob(){
    const mob = this._element.querySelector('.mob');

    if(mob){
      mob.classList.toggle('mob')
    }
      this._element.querySelectorAll('.boxField')[this.generateid()].classList.toggle('mob');
  }

  startGame() {
    const interval = setInterval(() => {
      this.randomMob()

      if(+this.missValue.innerHTML > 4){
        clearInterval(interval)
        alert('Game over!')
      }
    }, 1000)
  }

}
