Vue.config.devtools = true;

new Vue({

    el: "#app",
    data:{
        

        jobs: [   
            {
              id: 1,
              company: 'Perferendis',
              position: 'Developer',
              description: ' Lorem ipsum dolor sit amet consectetur adi Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
              created_at: '5/22/2021',
              logo: 'logo.jpg',
              city: 'Roma',
              contract: 'Full Time'
            },
            {
                id: 2,
                company: 'Perferendis',
                position: 'Shop Assistant',
                description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, ?',
                created_at: '5/22/2021',
                logo: 'logo.jpg',
                city: 'Roma',
                contract: 'Full Time'
              },
              {
                id: 3,
                company: 'Perferendis',
                position: 'Developer Java',
                description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto?',
                created_at: '5/22/2021',
                logo: 'logo.jpg',
                city: 'Roma',
                contract: 'Full Time'
              },
              {
                id: 4,
                company: 'Perferendis',
                position: 'Developer PHP',
                description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iust?',
                created_at: '5/22/2021',
                logo: 'logo.jpg',
                city: 'Roma',
                contract: 'Full Time'
              },
              {
                id: 5,
                company: 'Perferendis',
                position: 'Project Manager',
                description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. ?',
                created_at: '5/22/2021',
                logo: 'logo.jpg',
                city: 'Roma',
                contract: 'Full Time'
              },
           
        ],
        starred: [1, 2, 3],
        applied: [4, 5]
        
    }, //data si chiude qua

     //! Milestone 2.1
    // Identifichiamo nella lista gli annunci di lavoro
    //  preferiti, con un simbolo che si attiva/colora 
    //  solo se quell’annuncio è tra i preferiti (per esempio, una stella).

   //* Creare una funzione con if ed else, inserendo a loro interno l'icona di star (come ho fatto con dispari e par)
    methods:{
      
     getPreferedJob: function(index){
         
        if(this.starred.includes(index +1)){
            return "fas fa-star"
        } 
        else {
            return "far fa-star"
        }
     },
     chooseYourJobPrefered: function(index){
        if(!this.starred.includes(index +1 )){
            this.starred.push(index +1)
        }
        return "fas fa-star"
     }


    }//methods si chiude qua


})