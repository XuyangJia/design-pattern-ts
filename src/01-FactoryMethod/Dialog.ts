import { Button } from './Button'

export abstract class Dialog {
  abstract createButton(): Button
  render(): void {
    const button: Button = this.createButton()
    button.onClick()
    button.render()
  }
}