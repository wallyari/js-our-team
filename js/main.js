//* Creo un Arrey dei componenti del team
const team = [
    {
        name : `Wayne Barnett`,
        role : `Founder & CEO`,
        img : `wayne-barnett-founder-ceo.jpg`
    },
    {
        name : `Angela Caroll`,
        role : `Chief Editor`,
        img : `angela-caroll-chief-editor.jpg`
    },
    {
        name : `Walter Gordon`,
        role : `Office Manager	`,
        img : `walter-gordon-office-manager.jpg`
    },
    {
        name : `Angela Lopez`,
        role : `Social Media Manager`,
        img : `angela-lopez-social-media-manager.jpg`
    },
    {
        name : `Scott Estrada`,
        role : `Developer`,
        img : `scott-estrada-developer.jpg`,
    },
    {
        name : `Barbara Ramos`,
        role : `Graphic Designer`,
        img : `barbara-ramos-graphic-designer.jpg`
    },
];


//*Recupero il contenitore delle CARD
let cardContainer = document.getElementById('card');



//* Creo un ciclo for dell'array per vedere index di ogni oggetto
for( let i = 0 ; i < team.length ; i++ ){


   //stampo in console nome| ruolo | img di tutti gli elementi del team
console.log(`nome (${team[i].name}) ruolo (${team[i].role}) img (${team[i].img})`)

   // creo un elemento div
let card = document.createElement('div');
card.classList.add('col-4');

   // creo il contenuto HTML 
card.innerHTML= 
    ` <div class="card m-3">
        <img src="./img/${team[i].img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${team[i].name} </h5>
                    <p class="card-text">${team[i].role} </p>
            </div>
    </div> `
                        ;
   //aggiungo l'elemento creato
cardContainer.append(card);
};