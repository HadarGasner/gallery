var i = 0;
var gProjects =  createProjects()


function createProjects() {
    projects = [createProject('mine sweeper', '1.png', 'the purpess is to find mine sweeper',
    'Minesweepers are equipped with mechanical or electrical devices, known as "sweeps", for disabling mines. The modern minesweeper is designed to reduce the chances of it detonating mines itself; it is soundproofed to reduce its acoustic signature and often constructed using wood, fiberglass or non-ferrous metal, or is degaussed to reduce its magnetic signature Mechanical sweeps are devices designed to cut the anchoring cables of moored mines, and preferably attach a tag to help the subsequent localization and neutralization. They are towed behind the minesweeper, and use a towed body (e.g. oropesa, paravane) to maintain the sweep at the desired depth and position. Influence sweeps are equipment, often towed, that emulate a particular ship signature, thereby causing a mine to detonate. The most common such sweeps are magnetic and acoustic generators',
    'https://hadargasner.github.io/minesweeper/',['game','matrix']), 
    createProject('book shop','2.jpeg' ,'have a infomation about bookd',
    'The site simulates a bookstore, each book has a price picture and a short description of the book, you can add new books or delete old ones, and also update the price of a book'

    ,'https://hadargasner.github.io/Book-Shop/',['market web','msv', 'local storege']),
    createProject('tuch nums','3.jpg', 'push the nums in the order',
    'The rules are simple: Try to remove all 25 numbers from the screen. Touch all the numbers from the smallest to the biggest number. You have only one minute for the game!',

    'https://hadargasner.github.io/tuch-nums/',['game','matrix','speed']) ]
    console.log(projects);
    return projects
}

function createProject(name,img,header, description, link, tags) {
    return{
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

function getProjecks(){
    return gProjects;
}

function getProjeckByID(projectID){
    var project = gProjects.find(function(pro){
        console.log();
        return projectID === pro.id
    })
    return project
}


