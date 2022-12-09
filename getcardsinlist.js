/*

    @author
        Diltz

    Desc: This code helps you to get all cards on list

*/

const superagent = require("superagent")

module.exports = async (listId, apiKey, apiToken) => {
    var cards

    try {
        cards = await superagent.get(`https://api.trello.com/1/lists/${encodeURI(listId)}/cards?key=${encodeURI(apiKey)}&token=${apiToken}`)
    } catch (error) {
        throw error.status
    }

    return cards.body
}