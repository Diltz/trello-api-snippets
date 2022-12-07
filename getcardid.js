/*

    @author
        Diltz

    Desc: This code helps you to get trello's card id

*/

const superagent = require("superagent")

module.exports = async (listId, cardName, apiKey, apiToken) => {
    var cards

    try {
        cards = await superagent.get(`https://api.trello.com/1/lists/${encodeURI(listId)}/cards?key=${encodeURI(apiKey)}&token=${encodeURI(apiToken)}`)
    } catch (error) {
        throw error.status
    }

    return cards.body.find((card) => {
        return card.name == cardName
    }).id
}