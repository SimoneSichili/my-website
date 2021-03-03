// Milestone 1
// ●	Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
// ●	Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto
// Milestone 2
// ●	Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
// ●	Click sul contatto mostra la conversazione del contatto cliccato


var app = new Vue(
    {
        el: '#root',
        data: {
            contacts: [
                {
                    name: 'Michele',
                    avatar: 'img/avatar-1.svg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received'
                        },
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: 'img/avatar-2.svg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: 'img/avatar-3.svg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Luisa',
                    avatar: 'img/avatar-4.svg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
            ],
            currentContact: 0,  //index contatto
            currentMessage: null,   //index messaggio
            messageText: "",    //campo vuoto messaggio
            search: "",     //campo vuoto ricerca contatti
        },
        methods: {
            // funzione per impostare l'index del contatto cliccato
            setIndexContact: function(position) {
                this.currentContact = position;
                return this.currentContact;
            },
            // funzione che inserisci messaggio scritto nell'array e da la risposta
            newMessage: function(contact) {
                let newSentMessage = {
                    date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                    text: this.messageText,
                    status: 'sent'
                };

                this.filteredContacts[contact].messages.push(newSentMessage);

                this.messageText = "";

                setTimeout(
                    ()=> {
                        let newReceivedMessage = {
                            date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                            text: "Ok",
                            status: 'received'
                        };

                        this.filteredContacts[contact].messages.push(newReceivedMessage);

                    },1000
                );
            },
            // funzione per impostare l'index del messaggio al mouseenter
            setIndexMessage: function(position) {
                this.currentMessage = position;
                return this.currentMessage;
            },
            // funzione per rimuovere l'index del messaggio al mouseleave
            removeIndexMessage: function() {
                this.currentMessage = null;
                return this.currentMessage;
            },
            // funzione per eliminare il messaggio
            deleteMessage: function(position, messagePosition) {
                this.filteredContacts[position].messages.splice(messagePosition, 1);
            },
        },
        // funzione per filtrare i contatti
        computed: {
            filteredContacts() {
                return this.contacts.filter(
                    element => {
                        return element.name.toLocaleLowerCase().includes(this.search.toLowerCase());
                    }
                );
            }
        }
    }
);

