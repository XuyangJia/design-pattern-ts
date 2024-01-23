import { Button } from './Button'
import { Dialog } from './Dialog'
import { HTMLButton } from './HTMLButton'

export class WebDialog extends Dialog {
  createButton(): Button {
    return new HTMLButton
  }
}