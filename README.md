# WhatsTheMeaning (of this?)

Project that uses emoji translate library and tells whats the meaning of the emoji 🎉. Ideal if you dont understand what your friend sended you📩

## How to set up?

If you are end user(not developer) see this page: (not yet) and just transalate emoji! No more steps needed.
If you are developer and want to help see next section.

## I am developer and I want to help.

Thanks! This projects needs some help and I will be glad if you will help! Contributions are welcome via issues or
pull requests. But, before you do that please note some things:

    1. This projects uses npm packages in front of [node-emoji](https://github.com/omnidan/node-emoji) (core).
    2. We use watchify to use nodejs require() statement in browsers.
    3. Main js file is main.js but watchify translates it into bundle.js. Watchify updates bundle.js
    automatically so when updating js, please do theese changes to main.js.

How to set up locally?

    1. Fork this project.
    2. Open .git folder in your editor.
    3. Do changes.
    4. Make pull request.

To test your changes:

    1. Open index.html in your browser.
    2. Right-click on the website and click explore(Chrome).
    3. You can see js errors in console of the new opened window right now.

To add your changes to master branch of this project:

    1. Fork this repo.
    2. Clone this repo.
    3. Move to the cloned folder and open it in your code editor.
    4. Commit changes.
    5. If there are big changes (theese, which user need help with), Describe and tell users,
    how to use this new function.
    6. Make pull request and describe everyything you changed. Your PR will be consulated.

Thanks for your help!

## About

Project created on one sunny day as a project idea.
Its availibe under open-source license MIT. See LICENSE file for more info.

Created by Tomas Roj, 2019, rojtomas@email.cz