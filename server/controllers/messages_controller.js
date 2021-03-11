let messages = []
let id = 0

module.exports = {
    read: (req, res) => {
        res.status(200).send(messages)
    },
    create: (req, res) => {
        const {text, time} = req.body
        messages.push({
            id: id,
            text: text,
            time: time
        })
        id++
        res.status(200).send(messages)
    },
    update: (req, res) => {
        const updateId = req.params.id
        let {text, time} = req.body
        let messageIndex = messages.findIndex(message => message.id == updateId)
        let message = messages[messageIndex]

        messages[messageIndex] = {
            id: message.id,
            text: text || message.text,
            time: time
        }
        res.status(200).send(messages)

    },
    delete: (req, res) => {
        const deleteID = req.params.id;
        messageIndex = messages.findIndex(message => message.id == deleteID)
        messages.splice(messageIndex, 1)
        res.status(200).send(messages)
    }
}