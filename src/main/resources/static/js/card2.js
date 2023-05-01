document.addEventListener('DOMContentLoaded', () => {
    console.log("Running card.js")

    let cardIds = [530, 531, 533];

    let template = document.querySelector("#selectedCard");

    cardIds.forEach((id) => {
        fetch(`http://vps.cpe-sn.fr:8083/card/${id}`)
            .then(response => response.json())
            .then(card => {
                let clone = document.importNode(template.content, true);

                let newContent= clone.firstElementChild.innerHTML
                    .replace(/{{family_src}}/g, card.family)
                    .replace(/{{family_name}}/g, "")
                    .replace(/{{image_src}}/g, card.imgUrl)
                    .replace(/{{date}}/g, "")
                    .replace(/{{comment}}/g, "")
                    .replace(/{{like}}/g, "")
                    .replace(/{{button}}/g, "Read");

                clone.firstElementChild.innerHTML = newContent;

                let cardContainer= document.querySelector("#gridContainer");
                cardContainer.appendChild(clone);
            })
            .catch(error => console.log(error));
    });
});
