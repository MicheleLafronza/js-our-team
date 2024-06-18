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

// stampo su console le informazioni di ogni membro del team
for (let key in teamList) {
    console.log(teamList[key]);
}