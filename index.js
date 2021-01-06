var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "Suryansh Mithu",
assets : {
large_image : "‪larzival",
large_text : "Larzival" // THIS WILL SHOW AS "Playing <Status>" from the outisde
},
buttons :
 [{label : "Follow Me" , url : "https://cutt.ly/LjaAh2e",},
 {label : "Follow Literians Samaaj",url : "https://cutt.ly/UjaAPUb"}]
}
})
})
client.login({ clientId : "795641712437231616" }).catch(console.error);