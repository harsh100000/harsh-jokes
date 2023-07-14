let btn = document.getElementById('btn');
let joketxt = document.getElementById('joketxt');


// Using Fetch API

// const func = () => {
//     const setHeader = {
//         headers : {
//             Accept : "application/json"
//         }
//     }
//     fetch('https://icanhazdadjoke.com', setHeader)
//     .then((res) => res.json() )
//     .then((data) => joketxt.innerHTML = data.joke)
//     .catch((error) =>console.log(error))
// }



// Using Async Await
const func = async () => {
    try {
        const setHeader = {
            headers : {
                Accept : "application/json"
            }
        }
        const res = await fetch('https://icanhazdadjoke.com', setHeader)
        const data = await res.json();
        joketxt.innerHTML = data.joke;
    } catch (err) {
        console.log(`the error is ${err}`);
        
    }
}

btn.addEventListener('click', func);
func();
