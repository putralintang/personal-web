function SubmitData(){
    //get element dalam bentuk ketik
    let username = document.getElementById('input-name').value;
    let email = document.getElementById('input-email').value;
    let phonenumber = document.getElementById('input-number').value;
    let subject = document.getElementById('input-subject').value;
    let message = document.getElementById('input-message').value;
    
    console.log(username);
    console.log(email);
    console.log(phonenumber);
    console.log(subject);
    console.log(message);

    if (username == '' || email == '' || phonenumber == '' || subject == '' || message == ''){
        alert("Semuanya wajib diisi");
    }
    else{ //agar form dapat dikirim apabila semuanya telah diisi tanpa terkecuali
        let emailreceiver= "putra.lintangasto71@gmail.com"
        let a = document.createElement('a'); /*agar suatu tag dapat terbentuk apabila dieksekusikan*/
    
        a.href = `mailto: ${emailreceiver}?subject=${subject}&body=Greetings, my name is ${username} my email ${email} my contact ${phonenumber} Your message: ${message}`
        a.click()
    }

    //tampungan data
    let dataObject = 
    {
        name: username,
        email: email,
        phoneNumber: phonenumber,
        subject: subject,
        message: message
    }

    console.log(dataObject);

}
