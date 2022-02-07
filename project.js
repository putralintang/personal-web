let blogs = []

let month = ['January','February','March','April','May','June','July','August','September','October','November','December']

function addBlog(event) {
  event.preventDefault()

  let title = document.getElementById('input-blog-title').value
  let content = document.getElementById('input-blog-content').value  
  let startdate = document.getElementById('input-start-date').value
  let enddate = document.getElementById('input-end-date').value
  let image = document.getElementById('input-blog-image')

  image = URL.createObjectURL(image.files[0])

  let blog = {
    author: 'Putra Lintangasto',
    title: title,
    content,
    image,
    startdate,
    enddate,
    nodjs, nextjs, reactjs, typescript,
    postedAt: new Date()
  }

  blogs.push(blog)

  renderBlog()
  renderBlogdetail()
}

function renderBlog() {
  let lengthData = blogs.length

  let blogContainer = document.getElementById('contents')

  blogContainer.innerHTML = firstBlogContent()

  let nodjs = document.getElementById('nodjs').checked
  let nextjs = document.getElementById('nextjs').checked
  let reactjs = document.getElementById('reactjs').checked
  let typescript = document.getElementById('typescript').checked

  if (nodjs)    {        
      nodjs = (document.getElementById('nodjs').checked);    }
  else    {        nodjs = ''    }

  if (nextjs)    {        
      nextjs = (document.getElementById('nextjs').checked);    }
  else    {        nextjs = ''    }

  if (reactjs)    {        
      reactjs = (document.getElementById('reactjs').checked);    }
  else    {        reactjs = ''    }

  if(typescript)    {        
      typescript = (document.getElementById('typescript').checked);    }
  else    {        typescript = ''    }

  let i = 0
  for (i; i < lengthData; i++) {
    blogContainer.innerHTML += `
        <div class="blog-list-item" style="background-color: white; color: black; border: 2px solid rgb(7, 7, 49); width: 300px; flex-direction: row; align-items: left; flex-wrap: wrap;">
            <div class="blog-image" style="margin-bottom: 10px;">
            <img src="${blogs[i].image}" alt="" />
            </div>            
            
            <div class="blog-content">
            <h1>
                <a href="project-detail.html" target="_blank">
                    ${blogs[i].title}
                </a>
            </h1>
            <div style="text-align: left;">
            <span style="font-size: 15px; color: grey;">
              ${getDistanceTime(blogs[i].postedAt)}
            </span>
            </div>
            <p>
                ${blogs[i].content}
            </p>
            
            <div class="apps" style="margin-bottom: 15px;">
            <img src="assets/node-js.png" alt="nodjs" style="width: 30px">
            <img src="assets/reactjs.png" alt="reactjs" style="width: 30px">
            <img src="assets/typescript.png" alt="typescript" style="width: 30px">
            <img src="" alt="nextjs" style="width: 30px">
            </div>

            <div class="btn-group">
                <button class="btn-edit">Edit Post</button>
                <button class="btn-post">Post Blog</button>
            </div>
            </div>
        </div>`
  }
}

function renderBlogdetail (){
  let blogdetailContainer = document.getElementById('duration-technologies')  
  blogdetailContainer.innerHTML = Blogdetail()
  
}

function Blogdetail(){
    return `
    <div class="project-detail" style="color: white;">
      <div class="project-detail-container ">
        <h1 style="text-align: center;">Pasar Coding di Indonesia Dinilai Masih Menjanjikan</h1>
        <br>
        <img src="assets/blog-img-detail.png" alt="detail" style="width: 400px;">        
        <div class="duration-technologies" style="text-align: center; height: 100px; padding-bottom: 50px;" id="duration-technologies">
          <span>Duration</span><br>
          <span>12 Jan 2022 - 11 Feb 2022</span><br>
          <span>When Posted: ${getDistanceTime(blogs[i].postedAt)}</span><br>
          <span>Technologies</span><br>
          <span></span><br>
        </div>
        <p>
          REPUBLIKA.CO.ID, JAKARTA -- Ketimpangan sumber daya manusia (SDM) di
          sektor digital masih menjadi isu yang belum terpecahkan. Berdasarkan
          penelitian ManpowerGroup, ketimpangan SDM global, termasuk Indonesia,
          meningkat dua kali lipat dalam satu dekade terakhir. Khusus di sektor
          teknologi yang berkembang pesat, menurut Kemendikbudristek, Indonesia
          kekurangan sembilan juta pekerja teknologi hingga tahun 2030. Hal itu
          berarti Indonesia memerlukan sekitar 600 ribu SDM digital yang
          memasuki pasar setiap tahunnya.
        </p>
      </div>
    </div>
    `
}

function getFullTime(time) {
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

function getDistanceTime(time) {
  // waktu saat ini - waktu postingan
  const distance = new Date() - new Date(time)
  //Convert to day
  const miliseconds = 1000
  const secondsInMinute = 60
  const minutesInHour = 60
  const secondsInHour = secondsInMinute * minutesInHour
  const hoursInDay = 23

  let dayDistance = distance / (miliseconds * secondsInHour * hoursInDay)

  if (dayDistance >= 1) {
    return Math.floor(dayDistance) + ' day ago'
  } else {
    // convert to hour
    let hourDistance = Math.floor(distance / (miliseconds * secondsInHour))
    if (hourDistance > 0) {
      return hourDistance + ' hour ago'
    } else {
      // convert to minute
      let minuteDistance = Math.floor(distance / (miliseconds * secondsInMinute))
      if (minuteDistance > 0){
        return minuteDistance + ' minute ago'
      }
      else {
        const secondDistance = Math.floor(distance / miliseconds)
        return secondDistance + ' seconds ago'
      }
    }
  }


  console.log(dayDistance);
}

function firstBlogContent() {
  return `
    <div class="blog-list-item" style="background-color: white; color: black; border: 2px solid rgb(7, 7, 49); width: 300px; flex-direction: row; align-items: left; flex-wrap: wrap;">
    <div class="blog-image" style="margin-bottom: 10px;">
      <img src="assets/blog-img.png" alt="" style="height: 200px;width: 200px;">
    </div>
    <div class="blog-content">
      <div>
            <a href="project-detail.html"><h3 style="margin-bottom: 10px;">Dumbways Mobile App - 2021</h3></a>                        
      </div>

      <div style="text-align: left; margin-bottom:10px;">
        <span style="font-size: 15px; color: grey;">3 days ago</span>
      </div>

      <p style="margin-bottom:10px;">
        Ketimpangan sumber daya manusia (SDM) di sektor digital masih
        menjadi isu yang belum terpecahkan. Berdasarkan penelitian
        ManpowerGroup, ketimpangan SDM global, termasuk Indonesia,
        meningkat dua kali lipat dalam satu dekade terakhir. Lorem ipsum,
        dolor sit amet consectetur adipisicing elit. Quam, molestiae
        numquam! Deleniti maiores expedita eaque deserunt quaerat! Dicta,
        eligendi debitis?
      </p>
      
      <div class="apps" style="margin-bottom: 15px;">
            <img src="assets/node-js.png" alt="nodjs" style="width: 30px">
            <img src="assets/reactjs.png" alt="reactjs" style="width: 30px">
            <img src="assets/typescript.png" alt="typescript" style="width: 30px">
            <img src="" alt="nextjs" style="width: 30px">                        
      </div>

      <div class="btn-group">
        <button class="btn-edit">Edit Post</button>
        <button class="btn-post">Post Blog</button>
      </div>  

    </div>
  </div>
    `
}

setInterval(function () {
  renderBlog()
}, 2000)