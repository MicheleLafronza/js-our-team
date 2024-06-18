// creo array di oggetti
const teamList = [
    {
        "nome": "Wayne Barnett",
        "role": "Founder & CEO",
        "photo": "wayne-barnett-founder-ceo.jpg"
    },

    {
        "nome": "Angela Caroll",
        "role": "Chief Editor",
        "photo": "angela-caroll-chief-editor.jpg"
    },

    {
        "nome": "Walter Gordon",
        "role": "Office Manager",
        "photo": "walter-gordon-office-manager.jpg"
    },

    {
        "nome": "Angela Lopez",
        "role": "Social Media Manager",
        "photo": "angela-lopez-social-media-manager.jpg"
    },

    {
        "nome": "Scott Estrada",
        "role": "Developer",
        "photo": "scott-estrada-developer.jpg"
    },

    {
        "nome": "Barbara Ramos",
        "role": "Graphic Designer",
        "photo": "barbara-ramos-graphic-designer.jpg"
    },
]

// creo costante della row
let row = document.querySelector(".row");

// stampo le info sul documento sottoforma di stringhe
for (let i = 0; i < teamList.length; i++) {
    let teamName = teamList[i].nome;

    let teamRole = teamList[i].role;

    let teamPhoto = teamList[i].photo;

    // creo div con la classe card
    let card = newElementWithClass("div", "card");

    // inserisco il div dentro al row
    row.append(card);

    // creo elemento img
    let img = document.createElement("img");

    // inserisco img dentro al div
    card.append(img);

    // aggiungo src dell'immagine
    img.src = `img/${teamPhoto}`;

    // creo div bottom della card
    let botCard = newElementWithClass("div", "bot-card");

    // inserisco il bottom della card nella card
    card.append(botCard);

    // creo elemento con nome del membro del team
    let memberName = newElementWithClass("h3", "name");

    // inserisco il nome nella bottom card
    botCard.append(memberName);

    // personalizzo il nome in base al membro
    memberName.innerHTML=teamName;

    // creo div per il ruolo
    let roleCard = newElementWithClass("div", "role");

    // inserisco il ruolo nella bottom card
    botCard.append(roleCard);

    // personalizzo il ruolo in base al membro
    roleCard.innerHTML=teamRole;

}