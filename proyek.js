let projects = []

let months = ['January','February','March','April','May','June','July','August','September','October','November','December']

function addProject(event) {
    event.preventDefault()

    let name = document.getElementById('input-project-name').value;
    let startdate = document.getElementById('input-start-date').value;
    let enddate = document.getElementById('input-end-date').value;
    let description = document.getElementById('input-description').value;
    let image = document.getElementById('input-project-image');

    console.log(name)
    console.log(startdate)
    console.log(enddate)
    console.log(description)

    image = URL.createObjectURL(image.files[0]);
    console.log(image)

    let project = {
        author: 'Putra Lintangasto',
        name: name,
        description,
        image,
        startdate,
        enddate,
        postedAt: new Date()
    };

    projects.push(project);
    console.log(projects)
    renderProject();
}

function getFullTime(){
  let date = time.getDate()
  let monthIndex = time.getMonth()
  let year = time.getFullYear()

  let hours = time.getHours()
  let minutes = time.getMinutes()

  if (minutes < 10) {
    minutes = '0' + minutes
  }

  return `${date} ${month[monthIndex]} ${year} ${hours}:${minutes} WIB`
}

function getDistanceTime(){
  const distance = new Date() - new Date(time)

  const miliseconds = 1000
  const secondsInMinute = 60
  const minutesInHour = 60
  const secondsInHour = secondsInMinute * minutesInHour
  const hoursInDay = 23

  let dayDistance = distance / (miliseconds * secondsInHour * hoursInDay)

  if (dayDistance > 1)
  {
      return Math.floor(dayDistance) + ' days ago'
  }
  else if (dayDistance == 1)
  {
    return Math.floor(dayDistance) + ' day ago'
  }
  else 
  {
    // convert to hour
    let hourDistance = Math.floor(distance / (miliseconds * secondsInHour))
    if (hourDistance > 1) 
    {
      return hourDistance + ' hours ago'
    } 
    else if (hourDistance == 1)
    {
        return hourDistance + ' hours ago'
    }
    else 
    {
      // convert to minute
      let minuteDistance = Math.floor(distance / (miliseconds * secondsInMinute))
      if (minuteDistance > 1)
      {
        return minuteDistance + ' minutes ago'
      }
      else if (minuteDistance == 1)
      {
        return minuteDistance + ' minute ago'
      }
      else
      {
          const secondDistance = Math.floor(distance / miliseconds)
          return secondDistance + ' seconds ago'
      }
    }
  }
}

function renderProject(){
    lengthData = projects.length 
    let projectContainer = document.getElementById('contents');
    
    //buat checkbox
    let nodjs = document.getElementById('nodjs').checked
    let nextjs = document.getElementById('nextjs').checked
    let reactjs = document.getElementById('reactjs').checked
    let typescript = document.getElementById('typescript').checked

    projectContainer.innerHTML = firstProjectContent()

    if (nodjs)    {        nodjs = (document.getElementById('nodjs').checked);    }
    else    {        nodjs = ''    }

    if (nextjs)    {        nextjs = (document.getElementById('nextjs').checked);    }
    else    {        nextjs = ''    }

    if (reactjs)    {        reactjs = (document.getElementById('reactjs').checked);    }
    else    {        reactjs = ''    }

    if(typescript)    {        typescript = (document.getElementById('typescript').checked);    }
    else    {        typescript = ''    }

    let i = 0
    for(i;i < lengthData; i++){
        projectContainer.innerHTML +=
        ` <div class="project-list-item">
          <div class="project-image" style="margin-bottom: 10px;">
            <img src="${projects[i].image}" alt="gambar" style="width: 300px;">
          </div>
          <div>
            <a href="project-detail.html" target="_blank"><h3>${projects[i].name}</h3></a>                        
          </div>
        
          <div style="margin-bottom: 10px;">
            <p>Duration: ${getFullTime(projects[i].postedAt)}</p>
          </div>

          <div>
            <p>${projects[i].description}
            </p><br>
          </div>

          <div class="apps" style="margin-bottom: 15px;">
          <img src="assets/node-js.png" alt="nodjs" style="width: 30px">
          <img src="assets/reactjs.png" alt="reactjs" style="width: 30px">
          <img src="assets/typescript.png" alt="typescript" style="width: 30px">
          <img src="" alt="nextjs" style="width: 30px">
          </div>

          <div class="project-content">
            <div class="btn-group">
                <button class="btn-edit" style="background-color: gray;">Edit Project</button>
                <button class="btn-post" style="background-color: gray;">Post Project</button>
            </div>
          </div>
        </div> `
    }
}

function firstProjectContent(){
    return `
    <div class="project-list-item">
    <div class="project-image" style="margin-bottom: 10px;">
        <img src="blog-img.png" alt="gambar" style="width: 300px;">
    </div>
                  
      <div>
          <a href="project-detail.html" target="_blank"><h3>Dumbways Mobile App - 2021</h3></a>                        
      </div>

      <div style="margin-bottom: 10px;">
          <span>Duration: 3 Days ago</span>
      </div>

      <div>
          <p>Lorem ipsum,
              dolor sit amet consectetur adipisicing elit. Quam, molestiae
              numquam! Deleniti maiores expedita eaque deserunt quaerat! Dicta,
              eligendi debitis?
          </p><br>
      </div>

      <div class="apps" style="margin-bottom: 15px;">
      <img src="assets/node-js.png" alt="nodjs" style="width: 30px">
      <img src="assets/reactjs.png" alt="reactjs" style="width: 30px">
      <img src="assets/typescript.png" alt="typescript" style="width: 30px">
      <img src="" alt="nextjs" style="width: 30px">
      </div>

      <div class="project-content">
        <div class="btn-group">
            <button class="btn-edit" style="background-color: gray;">Edit Project</button>
            <button class="btn-post" style="background-color: gray;">Post Project</button>
        </div>
      </div>
  </div>
    `
}