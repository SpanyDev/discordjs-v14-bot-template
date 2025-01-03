const Client = require('../Utilities/Helpers/lasche.clients.js')
const { Main: { token } } = require('../Utilities/Settings/config.js');
const client = global.client = new Client(
    { token: token }
);

client.readEventFiles();
client.readCommandFiles(slash = true, text = true)
client.connect()