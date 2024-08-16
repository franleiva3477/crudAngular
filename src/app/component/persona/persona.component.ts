import { Component } from '@angular/core';
import { PersonasService } from 'src/app/services/personas.service';
import { Persona } from 'src/app/data-models/personas.interface';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {

  listPersonas: Persona[] = [];

  constructor(private sericioPersona: PersonasService){}
  ngOnInit(): void{
    this.sericioPersona.getAll().subscribe(data=> this.listPersonas = data);
    
    setTimeout(()=> (console.log(this.listPersonas)), 3000);

  }

//comentado
}
