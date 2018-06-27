import { Component, OnInit } from '@angular/core';
import { SpinnyService } from '../../../services/spinnyService/spinny.service';

@Component({
  selector: 'app-spinny',
  templateUrl: './spinny.component.html',
  styleUrls: ['./spinny.component.css']
})
export class SpinnyComponent implements OnInit {
  public showSpinny = false;
  public spinnyMessage = '';
  constructor(private spinnyService: SpinnyService) { }

  ngOnInit() {
    this.spinnyService.currentSpinnyStateObs.subscribe(res => {
      this.showSpinny = res.showSpinny;
      this.spinnyMessage = res.message;

    });
  }

}
