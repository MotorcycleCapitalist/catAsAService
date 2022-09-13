const request = require("request");
const catName = process.argv[2]

request(`https://api.thecatapi.com/v1/breeds/search?q=${catName}`, (error, response, body) => {

    try {
    //   fs.writeFileSync(`${path}`, body)
  
    //   const size = fs.stat(`${path}`, (err, stats) => {
    //       if(err){
              
    //       }else{
    //           console.log(`Downloaded and saved ${stats.size} bytes to ${path}`)
  
    //       }
    //   })
    // console.log(response.body);
    const data = JSON.parse(response.body)
    console.log(data[0])
  } catch (error) {
      
  }
})
