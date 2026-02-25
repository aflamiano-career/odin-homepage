const card = document.querySelector(".works__card");

for (let i = 0; i < 5; i++) {
  const newcard = document.createElement("article");
  newcard.classList.add("works__card");
  newcard.innerHTML = `<div class="dummy-screenshot">
            <p>screenshot of project</p>
          </div>
          <div class="card__title">
            <h2>Project name</h2>
            <div class="socials">
              <img src="./assets/github.svg" alt="" />
              <img src="./assets/open-in-new.svg" alt="" />
            </div>
          </div>
          <p class="card__description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
            aliquid voluptatibus animi earum culpa? Voluptate quasi corporis
            adipisci assumenda officiis.
          </p>`;
  card.after(newcard);
}
