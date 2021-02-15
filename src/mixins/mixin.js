export const mixinTrad = {
    data () {
        return {
            //Changement de langue
            language: "french"
        }
    },
    en: {
        Projects: "My Projects",
        contact: "Contact",
        nom: "Last Name",
        prenom: "First Name",
        courriel: "Email",
        categories: "category",
        informations: "informations",
        projets: "projects",
        rendezvous: "appointment",
        autre: "other",

    },

    fr: {
        Projects: "Mes Projets",
        contact: "Contact",
        nom: "Nom de Famille",
        prenom: "Prénom",
        courriel: "courriel",
        categories: "catégories",
        informations: "informations",
        projets: "projets",
        rendezvous: "rendez-vous",
        autre: "autre",

    },

    filters :{
        translateTo: function (value, language) {
            if (language==='english'){
                let keys= Object.keys(mixinTrad.en);
                for(let i=0; i<keys.length; i++){
                    if (keys[i]===value){
                        return mixinTrad.en[value]
                    }
                }
            } else if (language === 'french'){
                let keys= Object.keys(mixinTrad.fr);
                for(let i=0; i<keys.length; i++){
                    if (keys[i]===value){
                        return mixinTrad.fr[value]
                    }
                }
            }
        },

    }
};
