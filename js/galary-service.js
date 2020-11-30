var i = 0;
var gProjects =  createProjects()


function createProjects() {
    projects = [createProject('mine sweeper', '1.png', 'the purpess is to find mine sweeper',['matrix']), 
    createProject('book shop','2.jpeg' ,'have a infomation about bookd',['msv']),
    createProject('tuch nums','3.jpg', 'push the nums in the order',['matrix']) ]
    console.log(projects);
    return projects
}

function createProject(name,img, about, tags) {
    return{
        id: ++i,
        a: null,
        name: name,
        ulrImg: img,
        about: about,
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


