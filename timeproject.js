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
  
  function projectContent(){
      return `
      <div class="project-detail" style="color: white;">
      <div class="project-detail-container ">
        <h1 style="text-align: center;">Pasar Coding di Indonesia Dinilai Masih Menjanjikan</h1>
        <br>
        <img src="assets/blog-img-detail.png" alt="detail" style="width: 400px;">        
        <div class="duration-technologies" style="text-align: center; height: 100px; padding-bottom: 50px;">
          <span>Duration</span><br>
          <span>12 Jan 2022 - 11 Feb 2022</span><br>
          <span>When Posted: ${getDistanceTime}</span><br>
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