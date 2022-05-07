import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome:string = ""
  naz:string = ""

  constructor(private richiesta:HttpClient){}
  public mostra(){
    this.richiesta.get("https://api.nationalize.io/?name="+this.nome).subscribe(
      datinaz => {
        this.naz= datinaz["country"][0]["country_id"]
        console.log(datinaz)
      },
      errore => {
        console.log(errore["error"])
      }
    )

  }

}
