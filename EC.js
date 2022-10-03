//menambahkan argumen username pada function
function cetakURL(username) {
    //inisiasi variabel saweriaURL
    var saweriaURL = "https://saweria.co/"
    /* mengembalikan saweriaURL dan menambahkannya dengan variabel username */
    return saweriaURL + username
  }
  
  /* memanggil function cetakURL dan mengisi argumennya dengan variabel username */
  console.log(cetakURL(username))
  