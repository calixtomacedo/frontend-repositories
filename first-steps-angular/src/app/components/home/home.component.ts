import { Component, signal } from '@angular/core';
import { FooterModule } from '../footer/footer.module';
import { CommonModule } from '@angular/common';
import { HelloWorldService } from '../../services/hello-world.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  name = signal("Calixto Macedo");
  bikeUrl = "https://media.istockphoto.com/id/1402134774/photo/professional-road-cyclist-on-a-training-ride.jpg?s=612x612&w=0&k=20&c=CB2o_DXMgH15MLa1CEqWwZVtVb3rpRgejV3UFnUwF_U=" 
  count = 0;
  contador = signal(0);
  boolean = false;
  list = ["Calixto", "Rosy", "Lucca", "Thamyres"];

  constructor(private service: HelloWorldService) {
    this.service.getHelloWorld().subscribe(
      {
       next: (data) => {
          console.log(data);
        },
        error: (error) => {
          console.error("Erro ao chamar a API: ", error);
        },
        complete: () => {
          console.log("OK")
        }
      }
    );
  }

  myFunction() {
    console.log(this.name);
    this.contador.update(value => value + 1);
  }

  printContent() {
    this.name.set(this.name() +" - "+ this.count++);
    console.log(this.name());
  }

}
