/*

    @author Diltz

    Desc: This code helps you to get trello's list id

*/

const superagent = require("superagent")

module.exports = async (boardId, listName, apiKey, apiToken) => {
    var lists

    try {
        lists = await superagent.get(`https://api.trello.com/1/boards/${encodeURI(boardId)}/lists?key=${encodeURI(apiKey)}&token=${encodeURI(apiToken)}`)
    } catch (error) {
        throw error.status
    }

    return lists.body.find((list) => {
        return list.name == listName
    }).id
}