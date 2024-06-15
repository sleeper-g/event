import './grid-container.css'

export class GridContainer {
  constructor( element ) {
    if(typeof element === 'string') {
      element = document.querySelector(element);
    }
    this._missValue = document.querySelector('.miss-value');
    this._hitValue = document.querySelector('.hit-value');

    this._element = element;

    this._element.addEventListener('click', this.onBoxClick);

    this.start = setInterval(() => {
      this.randomMob()
    }, 1000);
  }

  generateGrid(rows, columns) {
    for (let indexRow = 0; indexRow < rows; indexRow++) {
      for (let indexColumn = 0; indexColumn < columns; indexColumn++) {
        const item = document.createElement("div");
        item.className = "grid-item";
        item.dataset["id"] = `${rows*indexRow+indexColumn}`;
        this._element.appendChild(item);
      };
    };
  };

  missClick(){
    // this._missValue.innerHTML = (+this._hitValue.innerHTML + 1).toString
    console.log(this._missValue);
  };

  hitClick(){
    this._hitValue.innerHTML = (+this._hitValue.innerHTML + 1).toString;
  };

  onBoxClick(e){
    console.log(e.currentTarget);
    console.log(e.target);

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
      this._element.childNodes[this.generateid()].classList.toggle('mob')
    }
    else {
      this._element.childNodes[this.generateid()].classList.toggle('mob')
    }
  }

}
