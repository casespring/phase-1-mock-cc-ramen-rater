// write your code here
// fetch("http://localhost:3000/ramens")  // my code
//     .then((resp) => resp.json())
//     .then((data) => {
//         console.log(data)

//         let firstRamen = data[0]; // Access the first value of the array
        
        
//         let imgDetail = document.querySelector(".detail-image");
//         let nameDetail = document.querySelector(".name");
//         let restaurantDetail = document.querySelector(".restaurant");
//         let rating = document.querySelector('#rating-display')
//         let comment = document.querySelector('#comment-display')
//         let form = document.querySelector('#new-ramen')


//             // Display the first ramen on page load
//             imgDetail.src = firstRamen.image;
//             nameDetail.textContent = firstRamen.name;
//             restaurantDetail.textContent = firstRamen.restaurant;
//             rating.textContent = firstRamen.rating;
//             comment.textContent = firstRamen.comment;

//         for (let ramen of data) {
//                console.log(ramen);
//                 let images = document.getElementById("ramen-menu");
//                 let img = document.createElement('img');
//                 img.src = ramen.image;
//                 images.appendChild(img);

                
//                 //imgDetail.src = data[0][3];
//                 //snameDetail.textContent = ramen.name;   doesn't work
//                 //restaurantDetail.textContent = data[0][2];
//                 // rating.textContent = data[0][4];
//                 //comment.textContent = data[0][5];
                 
//                 img.addEventListener('click', e => {
//                     imgDetail.src = ramen.image;
//                     nameDetail.textContent = ramen.name;
//                     restaurantDetail.textContent = ramen.restaurant;
//                     rating.textContent = ramen.rating;
//                     comment.textContent = ramen.comment;
//                 });        
        

//                 form.addEventListener('submit', e => {
//                     e.preventDefault()
//                     nameDetail.textContent = e.target["new-name"].value 
//                     restaurantDetail.textContent = e.target["new-restaurant"].value
//                     rating.textContent = e.target["new-rating"].value
//                     imgDetail.src = e.target["new-image"].value
//                     comment.textContent = e.target['new-comment'].value
//                     //images.appendChild(img.src = e.target["new-image"].value)
//                 })
//         }
//     });
    

// Teacher code 

// console.log("Hello World!");

// fetch("http://localhost:3000/ramens")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//     renderRamenDetail(data[0]);
//     for (let ramen of data) {
//       renderImage(ramen);
//     }
//   });

// function renderImage(ramen) {
//   let menuDiv = document.querySelector("#ramen-menu");

//   let ramenImage = document.createElement("img");

//   ramenImage.src = ramen.image;

//   menuDiv.append(ramenImage);

//   ramenImage.addEventListener("click", () => {
//     renderRamenDetail(ramen);
//   });
// }

// function renderRamenDetail(ramen) {
//   let image = document.querySelector(".detail-image");
//   image.src = ramen.image;

//   let name = document.querySelector(".name");
//   name.textContent = ramen.name;

//   let restaurant = document.querySelector(".restaurant");
//   restaurant.textContent = ramen.restaurant;

//   let rating = document.getElementById("rating-display");

//   rating.textContent = ramen.rating;

//   let comment = document.getElementById("comment-display");

//   comment.textContent = ramen.comment;
// }

// let form = document.querySelector("#new-ramen");
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log(
//     e.target.name.value,
//     e.target.restaurant.value,
//     e.target.image.value
//   );

//   let newRamen = {
//     name: e.target.name.value,
//     restaurant: e.target.restaurant.value,
//     image: e.target.image.value,
//     rating: e.target.rating.value,
//     comment: e.target["new-comment"].value,
//   };

//   renderImage(newRamen);
// });


// Teacher advance challenge 
//code 
// console.log("Hello World!");

// fetch("http://localhost:3000/ramens")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//     renderRamenDetail(data[0]);
//     for (let ramen of data) {
//       renderImage(ramen);
//     }
//   });

// function renderImage(ramen) {
//   let menuDiv = document.querySelector("#ramen-menu");

//   let ramenImage = document.createElement("img");

//   ramenImage.src = ramen.image;

//   menuDiv.append(ramenImage);

//   ramenImage.addEventListener("click", () => {
//     renderRamenDetail(ramen);
//   });

//   ramenImage.addEventListener("dblclick", () => {
//     fetch("http://localhost:3000/ramens/" + ramen.id, {
//       method: "DELETE",
//     });
//     ramenImage.remove();
//   });
// }

// function renderRamenDetail(ramen) {
//   let image = document.querySelector(".detail-image");
//   image.src = ramen.image;

//   let name = document.querySelector(".name");
//   name.textContent = ramen.name;

//   let restaurant = document.querySelector(".restaurant");
//   restaurant.textContent = ramen.restaurant;

//   let rating = document.getElementById("rating-display");

//   rating.textContent = ramen.rating;

//   let comment = document.getElementById("comment-display");

//   comment.textContent = ramen.comment;
// }

// let form = document.querySelector("#new-ramen");
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log(
//     e.target.name.value,
//     e.target.restaurant.value,
//     e.target.image.value
//   );

//   let newRamen = {
//     name: e.target.name.value,
//     restaurant: e.target.restaurant.value,
//     image: e.target.image.value,
//     rating: e.target.rating.value,
//     comment: e.target["new-comment"].value,
//   };

//   fetch("http://localhost:3000/ramens", {
//     method: "POST",
//     headers: {
//       "content-type": "Application/json",
//     },
//     body: JSON.stringify(newRamen),
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       renderImage(data);
//     });
// });

fetch("http://localhost:3000/ramens")  // my code with functions 
    .then((resp) => resp.json())
    .then((data) => {
        console.log(data); 
        ramenMoreDetailsONClick(data[0])
        //data.forEach(ramenMenu)
    for (let ramen of data) {
        ramenImages(ramen);
    }
    })

    function ramenImages(ramen) {
        let ramenImageDiv = document.querySelector('#ramen-menu');

        let rImg = document.createElement('img');
        rImg.src = ramen.image

        ramenImageDiv.append(rImg)

        rImg.addEventListener('click', (e) => {
            ramenMoreDetailsONClick(ramen);
        })
    };
    
    function ramenMoreDetailsONClick(ramen) {

        let imgDetail = document.querySelector(".detail-image");
        imgDetail.src = ramen.image;
    
        let nameDetail = document.querySelector(".name");
        nameDetail.textContent = ramen.name;
    
        let restaurantDetail = document.querySelector(".restaurant");
        restaurantDetail.textContent = ramen.restaurant;
    
        let rating = document.querySelector('#rating-display')
        rating.textContent = ramen.rating;
    
        let comment = document.querySelector('#comment-display')
        comment.textContent = ramen.comment;

    };
    
        let form = document.querySelector('#new-ramen')

        form.addEventListener('submit', e => {
            e.preventDefault();
            console.log(e.target[cart-amount].value);

            let newRamen = {
                name: e.target.name.value,
                restaurant: e.target.restaurant.value,
                image: e.target.image.value,
                rating: e.target.rating.value,
                comment: e.target['new-comment'].value
            };
            ramenImages(newRamen);
        });

    
    
    
    
    


