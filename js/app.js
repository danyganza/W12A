//get element
let button = document.getElementById(`button`);


//adding an event listener to the button
button.addEventListener(`click`, function(){


    function sucess(response){
        console.log(`welcome`);
    document.write('hello there, welcome')
}
    function failure(response){
        console.log(`please close the tab and come back 1 hour later`)
        document.write('hello there, we ran into some issues, please return in an hour')
    }
    //adding an axio to call an API'
    axios.request({
        url: "https:\/\/images.dog.ceo\/breeds\/cockapoo\/Guri3.jpg"
    }).then(sucess).catch(failure);
})