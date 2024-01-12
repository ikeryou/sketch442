import { MyDisplay } from "../core/myDisplay";
import { Func } from "../core/func";
import { Tween } from "../core/tween";

// -----------------------------------------
//
// -----------------------------------------
export class Slider extends MyDisplay {

  private _items: Array<HTMLInputElement> = []

  constructor(opt:any) {
    super(opt)

    const num = 1
    for (let i = 0; i < num; i++) {
      const el = document.createElement('input') as HTMLInputElement
      el.classList.add('js-item-input')
      el.type = 'range'
      this.el.appendChild(el)
      this._items.push(el)
    }

    this._resize()
  }

  public setValue(v :number):void {
    this._items.forEach((item) => {
      item.value = v.toFixed(0)
    })
  }

  protected _update():void {
    super._update()
  }

  protected  _resize(): void {
    super._resize()

    const sh = Func.sh()
    const sliderHeight = sh * 0.3
    this._items.forEach((item) => {
      Tween.set(item, {
        width: sh - sliderHeight,
        height: sliderHeight,
        rotationZ: -90,
        y: sh - sliderHeight
      })
    })
  }
}







