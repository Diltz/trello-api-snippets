/*

    @author
        Diltz

    Desc: This code helps you to get trello's list id

*/

const superagent = require("superagent")

module.exports = async (boardId, listName, apiKey, apiToken) => {
    //https://api.trello.com/1/boards/{id}/lists?key=APIKey&token=APIToken

    var lists
    var listId

    try {
        lists = await superagent.get(`https://api.trello.com/1/boards/${encodeURI(boardId)}/lists?key=${encodeURI(apiKey)}&token=${encodeURI(apiToken)}`)
    } catch (error) {
        throw error.status
    }

    return lists.body.find((list) => {got
        return list.name == listName
    }).id
}