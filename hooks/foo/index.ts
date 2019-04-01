const { send } = require('micro')
module.exports = async (req: IncomingMessage, res: ServerResponse) => {
  try {
    send(res, 200)
  } catch (e) {
    console.error(e.message)
    return send(res, 400)
  }
}
