import { Component, EventEmitter, inject, Input, Output, output } from '@angular/core';
import { SendFormService } from '../../services/send-form.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  private sendFormService = inject(SendFormService);
  name = "Calixto Macedo";
  idButton = 2000;
  showInCase = false;
  listItems = new Array('Calixto', 'Rosimeire', 'Davi Lucca', 'Adrielly Thamyres');

  @Input("name")
  inputName!: string

  @Output()
  outputNameValue = new EventEmitter<string>();

  submit() {
    this.outputNameValue.emit(this.name)
    this.sendFormService.callingBackend(this.listItems.toString())
  }

}
