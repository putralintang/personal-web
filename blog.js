let blogs = []

let months = ['January','February','March','April','May','June','July','August','September','October','November','December']

function addBlog(event){
    event.preventDefault()

    let title = document.getElementById('input-blog-title').value
    let content = document.getElementById('input-blog-content').value
    let image = document.getElementById('input-blog-image')

    //agar gambar bisa dimasukin sebagai objek
    image = URL.createObjectURL(image.files[0])
    //console.log(image)
    let blog = {
        title: title,
        content,
        image,
        author: 'Putra Lintangasto',
        postedAt: new Date()
    }
    
    blogs.push(blog)

    renderBlog()
}

function renderBlog(){
    let lengthData = blogs.length
    
    let blogContainer = document.getElementById('contents')

    blogContainer.innerHTML = firstBlogContent()

    for (let i=0;i < lengthData; i++){
        blogContainer.innerHTML += 
        `<div class="blog-list-item">
        <div class="blog-image">
          <img src="${blogs[i].image}" alt="" />
        </div>
        <div class="blog-content">
          <div class="btn-group">
            <button class="btn-edit">Edit Post</button>
            <button class="btn-post">Post Blog</button>
          </div>
          <h1>
            <a href="blog-detail.html" target="_blank"
              >${blogs[i].title}</a
            >
          </h1>
          <div class="detail-blog-content">
          ${blogs[i].postedAt} | ${blogs[i].author}
          </div>
          <p>
          ${blogs[i].content}
          </p>
        </div>
      </div>`
    }
}

function firstBlogContent(){
    return `
    <div class="blog-list-item">
          <div class="blog-image">
            <img src="blog-img.png" alt="" />
          </div>
          <div class="blog-content">
            <div class="btn-group">
              <button class="btn-edit">Edit Post</button>
              <button class="btn-post">Post Blog</button>
            </div>
            <h1>
              <a href="blog-detail.html" target="_blank"
                >Pasar Coding di Indonesia Dinilai Masih Menjanjikan</a
              >
            </h1>
            <div class="detail-blog-content">
              12 Jul 2021 22:30 WIB | Ichsan Emrald Alamsyah
            </div>
            <p>
              Ketimpangan sumber daya manusia (SDM) di sektor digital masih
              menjadi isu yang belum terpecahkan. Berdasarkan penelitian
              ManpowerGroup, ketimpangan SDM global, termasuk Indonesia,
              meningkat dua kali lipat dalam satu dekade terakhir. Lorem ipsum,
              dolor sit amet consectetur adipisicing elit. Quam, molestiae
              numquam! Deleniti maiores expedita eaque deserunt quaerat! Dicta,
              eligendi debitis?
            </p>
          </div>
        </div>`   
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