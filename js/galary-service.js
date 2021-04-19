var i = 0;
var gProjects = createProjects()

function createProjects() {
    projects = [createProject('Feed Me', '6.png', 'providing users updated content',
        'web feed (or news feed) is a data format used for providing users with frequently updated content. Content distributors syndicate a web feed, thereby allowing users to subscribe a channel to it by adding the feed resource address to a news aggregator client (also called a feed reader or a news reader). Users typically subscribe to a feed by manually entering the URL of a feed or clicking a link in a web browser or by dragging the link from the web browser to the aggregator.',
        'https://feed-me-seymor.herokuapp.com/#/', ['react', 'frontend', 'feed', 'cradl', 'backend']),

    createProject('Pegassus', '5.png', 'gmail and keep apps',
        'Gmail is a free email service provided by Google. As of 2019, it had 1.5 billion active users worldwide.[1] A user typically accesses Gmail in a web browser or the official mobile app. Google also supports the use of email clients via the POP and IMAP protocols.',
        'https://hadargasner.github.io/emailApp/', ['react', 'app', 'email', 'cradl', 'notes']),


    createProject('Mine Sweeper', '1.jpg', 'the purpess is to find mine sweeper',
        'Minesweepers are equipped with mechanical or electrical devices, known as "sweeps", for disabling mines. The modern minesweeper is designed to reduce the chances of it detonating mines itself; it is soundproofed to reduce its acoustic signature and often constructed using wood, fiberglass or non-ferrous metal, or is degaussed to reduce its magnetic signature Mechanical sweeps are devices designed to cut the anchoring cables of moored mines, and preferably attach a tag to help the subsequent localization and neutralization. They are towed behind the minesweeper, and use a towed body (e.g. oropesa, paravane) to maintain the sweep at the desired depth and position. Influence sweeps are equipment, often towed, that emulate a particular ship signature, thereby causing a mine to detonate. The most common such sweeps are magnetic and acoustic generators',
        'https://hadargasner.github.io/minesweeper/', ['game', 'matrix']),

    createProject('Memegen', '7.jpeg', 'a memes generator',
        'An image macro is a piece of digital media featuring a picture, or artwork, with some form of text superimposed. The text frequently appears at the top and bottom of the image. Image macros are one of the most common forms of internet memes, and often feature a witty message or catchphrase, although not all image macros are necessarily humorous. LOLcats, which are images of expressive cats coupled with texts, are considered to be the first notable occurrence of image macros.[1] Advice animal image macros, also referred to as stock-character macros, are also highly associated with the image macro template.',
        'https://hadargasner.github.io/memes2/', ['canvas', 'game', 'picture']),
    createProject('Book Shop', '2.jpeg', 'have a infomation about bookd',
        'The site simulates a bookstore, each book has a price picture and a short description of the book, you can add new books or delete old ones, and also update the price of a book'

        , 'https://hadargasner.github.io/Book-Shop/', ['market web', 'msv', 'local storege']),
    createProject('Tuch Nums', '3.jpg', 'push the nums in the order',
        'The rules are simple: Try to remove all 25 numbers from the screen. Touch all the numbers from the smallest to the biggest number. You have only one minute for the game!',

        'https://hadargasner.github.io/tuch-nums/', ['game', 'matrix', 'speed'])]
    console.log(projects);
    return projects
}

function createProject(name, img, header, description, link, tags) {
    return {
        id: ++i,
        a: null,
        name: name,
        ulrImg: img,
        about: header,
        description: description,
        link: link,
        tags: tags
    }
}

function getProjecks() {
    return gProjects;
}

function getProjeckByID(projectID) {
    var project = gProjects.find(function (pro) {
        console.log();
        return projectID === pro.id
    })
    return project
}


