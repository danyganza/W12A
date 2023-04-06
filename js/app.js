//get element
let button = document.querySelector('#button');


//adding an event listener to the button
button.addEventListener(`click`, function(){


    function sucess(response){
        console.log(`welcome`);
    document.write('hello there, welcome')
}
    function failure(response){
        console.log(`please close the tab and come back 1 hour later`)
        document.write('hello there, we ran into some issues,')
    }
    //adding an axio to call an API'
    axios.request({
        url:  `https://random.dog/24178-5036-5513.jpg`
    }).then(sucess).catch(failure);
})