const express = require('express')

const app = express()
const PORT = 5000

app.set('view engine', 'hbs') // set hbs

app.use('/public', express.static(__dirname + '/public')) // set public folder/path

app.use(express.urlencoded({extended: false}))

let isLogin = true

let blogs = [
    {
        title: 'Pasar Coding di Indonesia Dinilai Masih Menjanjikan Sekali',
        postAt: '12 Januari 2022 12:30 WIB',
        author: 'Samsul Rijal',
        content: 'Ketimpangan sumber daya manusia (SDM) di sektor digital masih menjadi isu yang belum terpecahkan. Berdasarkan penelitian ManpowerGroup, ketimpangan SDM global, termasuk Indonesia, meningkat dua kali lipat dalam satu dekade terakhir. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, molestiae numquam! Deleniti maiores expedita eaque deserunt quaerat! Dicta, eligendi debitis?'
    }
]

console.log(blogs);

function getFullTime(time) {
    let month = ['January', 'Februari', 'March', 'April', 'May', 'June', 'July', 'August', 'September','October', 'November','December']

    let date = time.getDate() // mendapatkan tanggal
    let monthIndex = time.getMonth()  // mendapatkan bulan
    let year = time.getFullYear() // mendpatkan tahun
  
    let hours = time.getHours() // mendapatkan jam
    let minutes = time.getMinutes() // mendapatkan menit
  
    return `${date} ${month[monthIndex]} ${year} ${hours}:${minutes} WIB`
}


app.get('/', function(request, response) {
    response.render('index')
})

app.get('/blog', function(request, response) {

    let dataBlogs = blogs.map(function(data){
        return {
            ...data,
            isLogin: isLogin
        }
    })

    console.log(dataBlogs);


    response.render('blog', {isLogin : isLogin, blogs: dataBlogs})
})
  

app.get('/delete-blog/:index', function(request, response) {

    let index = request.params.index
    console.log(index);

    blogs.splice(index, 1)
    response.redirect('/blog')
})


app.get('/blog-detail/:id', function(request, response) {
    // console.log(req.params);
    
    let blogId = request.params.id
    response.render('blog-detail', {blog : {
        id : blogId,
        title : 'Selamat datang di web personal' ,
        content : 'Sejak pertama kali bootcamp saya belajar mengenai cara membuat website menggunakan bahasa pemrograman HTML, lalu saya juga belajar bahasa pemgrograman lain seperti bahasa CSS dan Javascript. Sebelumnya saya pernah belajar HTML di kampus meski tidak sedetail di bootcamp (karena seingat saya tidak diajarkan bahasa CSS), selain itu sebelum bootcamp juga pernah belajar Javascript (tetapi belum dinalar untuk membuat program)',
        author : 'Putra Lintangasto',
        postAt : '12 Januari 2022, 18:00 WIB'
    }})

})

// routing halaman add blog
app.get('/add-blog', function(request, response) {
    response.render('add-blog')
})


app.post('/blog', function(request, response) {
    let data = {
        title: request.body.inputTitle,
        content: request.body.inputContent,
        author: 'Putra Lintangasto',
        postAt: getFullTime(new Date())
    }
    
    blogs.push(data)
    console.log(data);

    response.redirect('/blog')
})

app.get('/blog', function(request, response) {

    let index = request.params.index;
    
    blogs.splice(index, 1);
    
    console.log(index);
    response.redirect('/blog')
})

app.get('/contact', function(request, response) {
    response.render('contact')
})



app.listen(PORT, function() {
    console.log(`Server starting on PORT ${PORT}`);
})