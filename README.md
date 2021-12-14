# Alfred Bottler
Say hello to your favorite buttle- I mean bottler! Alfred brings back the old-school way of doing things **through the chat**.

## Installation
The installation guide can be found in the [Installation.md](https://github.com/JonathanNeyman/AlfredBottler/blob/main/Installation.md) file.

## Notes
* The project is set up for you to use `npm run dev` when working on the bot so that it refreshes when you save a file.
* To add more commands simply make a copy of `command-template.js` and put it in `commands/`, by default the command is disabled. When the command is ready to use set `enabled: true` in the command.

## Commands
`/broadcast {message}` : Broadcasts a message across all servers.\
`/mute {user} {duriation} {reason}` : Mutes a user the old-fassion way, can have a duriation and/or reason if needed.\
`/kick {user} {reason}` : Kicks a user the old-fassion way, can have a reason if needed.\
`/ban {user} {duriation} {reason}` : Bans a user the old-fassion way, can have a duriation and/or reason if needed.\
`/ping` : Simply replies pong, can be useful to see if the bot has run into any issues.

## Todo
* Implement `/broadcast {message}`
* Implement `/mute {user} {duriation} {reason}`
