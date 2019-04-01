import { IncomingMessage, ServerResponse } from 'http'
import {send} from 'micro'

module.exports = async (req: IncomingMessage, res: ServerResponse) => {
  try {
    send(res, 200, 'foo')
  } catch (e) {
    console.error(e.message)
    return send(res, 400)
  }
}
