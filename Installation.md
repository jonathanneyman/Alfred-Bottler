# Alfred Bottler Installation
## Bot Setup
* **Clone the repo** by typing ``git clone https://github.com/JonathanNeyman/AlfredBottler.git`` into the console
* Add a ``config.json`` file with your respective information. The template is as follows:
```json
{
    "token": "token-here",
    "clientID": "clientID-here",
    "devGuild": {
        "guildID": "dev-guildID-here"
    }
}
```
* **Install** all the packages by typing `npm init` into the console.
* **Deploy** the global commands if you want to by typing `node deploy.js` into the console.
* **Start** the bot by typing `node index.js` into the console.
