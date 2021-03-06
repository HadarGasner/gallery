function init(){
    renderProjects()
}


function renderProjects() {
    var projects = getProjecks()
    
    var strHtml = '';
 
    projects.map(function (project) {
        strHtml +=  `<div class="col-md-4 col-sm-6 portfolio-item">
   <a onClick="onOpenProject(${project.id})" class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
    <div class="portfolio-hover">
      <div class="portfolio-hover-content">
        <i class="fa fa-plus fa-3x"></i>
      </div>
    </div>
    <img class="img-fluid" src="img/portfolio/${project.ulrImg}" alt="">
  </a>
  <div class="portfolio-caption">
   <h4>${project.name} </h4>
    <p class="text-muted">${project.about}</p> </div>
    </div> `
    })
  

    $('.project-thumbs').html(strHtml)
}

function onOpenProject(id){
  console.log();
    console.log(id);
    var project = getProjeckByID(id)
    var strHtml = ` <h2>${project.name}</h2>
    <p class="item-intro text-muted">${project.about}</p>
    <img class="img-fluid d-block mx-auto" src="img/portfolio/${project.ulrImg}" alt="">
    <p>${project.description}</p>
    
  <ul class="list-inline">
  <button onclick="window.location.href='${project.link}'" type="button" class="btn btn-primary">Go To The Project</button>
    <li>Date: November 2020</li>
    <li>Client: Explore</li>
    <li>Category: ${project.tags}</li>
  </ul>
  <button class="btn btn-primary" data-dismiss="modal" type="button">
      <i class="fa fa-times"></i>
      Close Project</button>
    `
    $('.modal-body').html(strHtml)
    
}