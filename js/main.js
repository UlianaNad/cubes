const elRoot = document.querySelector('.root');
const goButton = document.querySelector('.go');
const number = document.querySelector('.number');



let cubeHtml = "";

goButton.addEventListener('click', () => {
    let cubeAmount = number.value;
    console.log(cubeAmount);

    for(let i = 1; i <= cubeAmount; i++){
        cubeHtml += `<div class="cube">${i}</div>`;

        const myArray = [];
        // const index = myArray.indexOf(i);
        // console.log(index);
        myArray.forEach(element => {
            element.addEventListener('click', handleClick);
          });
    }
    elRoot.innerHTML = cubeHtml;
    let cubes = document.querySelectorAll('div.cube');

    
    cubes.forEach(function(cubeItem){
     
        cubeItem.addEventListener('click', () => {
            console.log(cubeItem)
            cubeItem.classList.add('white');
            

            document.querySelector('.white').addEventListener('click', () => {
                cubeItem.classList.remove('white');
                return;
            })
        })
        
    })
});


