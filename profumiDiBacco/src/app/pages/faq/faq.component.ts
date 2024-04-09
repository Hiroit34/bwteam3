import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',

})
export class FaqComponent {

  buttonCollapsed:boolean[] = []

  domandeVino= [
    {
      domanda: "Qual è il processo di fermentazione del vino?",
      risposta: "Il processo di fermentazione del vino è la trasformazione degli zuccheri presenti nell'uva in alcol e anidride carbonica da parte dei lieviti."
    },
    {
      domanda: "Cosa si intende per 'corpo' di un vino?",
      risposta: "Il corpo di un vino si riferisce alla sua consistenza e pienezza in bocca, che può essere leggera, media o piena."
    },
    {
      domanda: "Quali sono le principali regioni vinicole nel mondo?",
      risposta: "Le principali regioni vinicole includono la Francia, l'Italia, la Spagna, gli Stati Uniti, l'Australia e molti altri paesi."
    },

    {
      domanda: "Cosa sono i tannini nel vino e come influenzano il gusto?",
      risposta: "I tannini sono composti fenolici presenti soprattutto nella buccia dell'uva e nel legno delle botti, che conferiscono al vino struttura, astringenza e capacità di invecchiamento."
    },
    {
      domanda: "Qual è la temperatura di servizio ideale per i diversi tipi di vino?",
      risposta: "La temperatura di servizio ideale varia a seconda del tipo di vino: circa 12-18°C per i vini bianchi, 14-20°C per i vini rossi e 6-10°C per gli spumanti."
    },

    {
      domanda: "Quali sono le differenze tra vino biologico, biodinamico e convenzionale?",
      risposta: "Il vino biologico è prodotto da uve coltivate secondo i principi dell'agricoltura biologica, mentre il vino biodinamico segue i principi dell'agricoltura biodinamica, che include aspetti spirituali. Il vino convenzionale è prodotto con metodi tradizionali che possono includere l'uso di pesticidi e fertilizzanti chimici."
    },
    {
      domanda: "Cosa si intende per 'terroir' nel contesto del vino?",
      risposta: "Il 'terroir' si riferisce alla combinazione di fattori ambientali (come clima, suolo e altitudine) che influenzano il carattere unico di un vino."
    },
    {
      domanda: "Come si abbinano i vini con i cibi in modo appropriato?",
      risposta: "Per abbinare i vini con i cibi, si consiglia di considerare la compatibilità di sapori, texture e intensità, cercando di bilanciare e migliorare l'esperienza di degustazione."
    },
    {
      domanda: "Qual è la differenza tra vino invecchiato in bottiglia e vino invecchiato in botte?",
      risposta: "Il vino invecchiato in bottiglia si invecchia in bottiglia, mentre il vino invecchiato in botte si invecchia in grandi fusti di legno."
    },
    {
      domanda: "Cosa sono le caratteristiche di un buon vino?",
      risposta: "Le caratteristiche di un buon vino includono equilibrio, complessità aromatica, acidità, tannini (per i vini rossi), freschezza e lunghezza in bocca."
    }
  ]


  constructor(private route:Router){}

ngOnInit(){

  let numeroVino = this.domandeVino.length

  this.buttonCollapsed = Array.from({length:numeroVino}).map(i=> true)


}

redirect(){

  this.route.navigate(['/'])

}

}

