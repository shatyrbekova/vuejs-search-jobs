Vue.config.devtools = true;

new Vue({

    el: "#app",
    data:{
        

        jobs: [   
            {
              id: 1,
              company: 'Start for Win ',
              position: 'Backend Web Developer',
              description: 'Ottima padronanza di MySQL/MariaDB, Sviluppo di siti ed applicazioni web PHP / Wordpress ',
              created_at: '5/22/2021',
              logo: 'logo.jpg',
              city: 'Casoria, Campania',
              contract: '€1.000 al mese - Temporaneamente da remoto',
              esperienza: 'Sviluppatore PHP/Wordpress: 1 anno (Obbligatorio)'
            },
            {
                id: 2,
                company: 'Key To Business Srl',
                position: 'Junior Front end Developer',
                description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, ?',
                created_at: '5/22/2021',
                logo: 'logo.jpg',
                city: 'Torino, Piemonte ',
                contract: '€30.000 all\'anno - Da remoto - Tempo pieno',
                esperienza: 'Sviluppatore: 1 anno (Opzionale)'
              },
              {
                id: 3,
                company: 'Intrè',
                position: 'Developer Java',
                description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto?',
                created_at: '5/22/2021',
                logo: 'logo.jpg',
                city: 'Provincia di Monza e della Brianza, Lombardia',
                contract: 'Tempo pieno, Tirocinio formativo/Stage - Temporaneamente da remoto',
                esperienza: 'Conoscenza base di Java, SQL, Node.js'
              },
              {
                id: 4,
                company: 'We-Unit Group S.p.A',
                position: 'Developer PHP',
                description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iust?',
                created_at: '5/22/2021',
                logo: 'logo.jpg',
                city: ' Villanova d\'Albenga, Liguria',
                contract: '€1.500 - €2.000 al mese - Tempo indeterminato',
                esperienza: 'Conoscenza base di Java, SQL, Node.js'
              },
              {
                id: 5,
                company: 'Bewe srl',
                position: 'Project Manager',
                description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. ?',
                created_at: '5/22/2021',
                logo: 'logo.jpg',
                city: 'Milano, Lombardia',
                contract: 'Tempo pieno, Part-time - Da remoto',
                esperienza: 'Sviluppatore: 1 anno (Preferenziale)'
              },
           
        ],
        starred: [1, 2, 3],
        applied: [4, 5],
        alert: false,
        
    }, //data si chiude qua
    computed: {
      filteredApplied: function(){
        return this.applied.filter(index =>{

          return index.id;
        })
      }
    },
     //! Milestone 2.1
    // Identifichiamo nella lista gli annunci di lavoro
    //  preferiti, con un simbolo che si attiva/colora 
    //  solo se quell’annuncio è tra i preferiti (per esempio, una stella).

   //* Creare una funzione con if ed else, inserendo a loro interno l'icona di star (come ho fatto con dispari e par)
    methods:{
      
     getPreferedJob: function(index){
         
        if(this.starred.includes(index +1)){
            return "fas fa-star";
        } 
        else {
            return "far fa-star";
        }
     },

     //!Milestone 2.2

     chooseYourJobPrefered: function(index){
        if(!this.starred.includes(index +1 )){

            this.starred.push(index +1) ;//aggiungere +1 perchè array di oggetti inizia                             
                                        //da zero, invece la lista o l'id in esame inizia da 1. 
                                        //in questo modo, la lista inizierà da 1, ma NON da 0. 
        }else{
            const i = this.starred.indexOf(index +1)
            this.starred.splice(i, 1)
        }
        
     },

     //! Milestone 3 

        // Gli annunci a cui abbiamo mandato una candidatura non mostreranno 
        // il pulsante APPLY e si distingueranno dalle altre per colore e Badge ‘applied’.
        // Un annuncio a cui abbiamo inviato la candidatura automaticamente 
        // viene eliminato dalla lista starred.
        // Anche in questo caso inseriremo l’id nell’array applied. 
        // (come prima abbiamo fatto per lo starred)


     applyYourPreferedJob: function(index){
          if (!this.applied.includes(index +1)){
              this.applied.push(index +1)
              const i = this.starred.indexOf(index +1)
              this.starred.splice(i, 1)
          };
        
           
         setTimeout(()=>{
               alert('Candidatura inviata');
   
          }, 1000);

         //? non funziona, poichè  ripete il ciclo for.
        //   setTimeout(()=>{
        //     this.alert=false;
        //   }, 3000)
        
     },
       
    


    }//!methods si chiude qua
   

})