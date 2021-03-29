// function main(){
// }

(()=> {
    let characters;
    const container = document.querySelector('.caracter-container');
    const detailPanel = document.querySelector('.details-pane');

    const handlePageRender = async () => {

        const data = await fetch("https://swapi.dev/api/people/")

        characters = await data.json();

        // DOM
        characters.results.forEach((el, i) => {
            container.insertAdjacentHTML('beforeend', 
            `<div class="character" id=${i}>
                <div class="character-img-box">
                    <img src="./images/star-wars-${i}.png" alt="star wars" class="charcter-img" id=cib-${i}>
                </div>
                <p class="character-name">${el.name}</p>
            </div>`
            )

            if (i === 0) {
                
                detailPanel.insertAdjacentHTML('afterbegin', 
                    `
                    <div class="user-image">
                    <img class="star-wars-img" src="./images/star-wars-${i}.png" alt="full-avatar">                
                    </div>
                    <div class="user-details">
                    <div class="details"> <span class="detail">name:</span> ${el.name}</div>
                    <div class="details"> <span class="detail">gender:</span> ${el.gender}</div>
                    <div class="details"> <span class="detail">height:</span> ${el.height}</div>
                    </div> 
                    `
                    )
            }
        })

    }

    const handleDetaiPanel = () => {
        container.addEventListener('click', e => {
            if (e.target.closest('.character')) {
                const id = +e.target.closest('.character').id;
                const element = characters.results[id];
                detailPanel.innerHTML = '';
                
                detailPanel.insertAdjacentHTML('afterbegin', 
                `
                <div class="user-image">
                    <img class="star-wars-img" src="./images/star-wars-${id}.png" alt="full-avatar">                
                </div>
                <div class="user-details">
                    <div class="details">name: ${element.name}</div>
                    <div class="details">gender: ${element.gender}</div>
                    <div class="details">height: ${element.height}</div>
                </div> 
                `
                )
            }
        })

        container.addEventListener('mousedown', e => {
            if (e.target.closest('.character')) {
                const id = +e.target.closest('.character').id;
                document.getElementById(`cib-${id}`).style.border = "8px solid #897853";
            }
        })

        container.addEventListener('mouseup', e => {
            if (e.target.closest('.character')) {
                const id = +e.target.closest('.character').id;
                document.getElementById(`cib-${id}`).style.border = "";
            }
        })
    }

    handleDetaiPanel();


    document.addEventListener("DOMContentLoaded", handlePageRender);
}) ();
