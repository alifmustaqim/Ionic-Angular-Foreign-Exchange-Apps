import { Component, OnInit } from '@angular/core';
import { DataService } from "../services/data.service";
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  symbols: any;
  curAmount: any = '1.00';
  constructor(private dataServer: DataService) {}
  ngOnInit() {
    this.getSymbols();
  }

  // INITIAL
  async getSymbols() {
    await this.dataServer.getSymbols().then((data: any) => {
      this.symbols = [];
      for (var key in data.symbols) {
        if (data.symbols.hasOwnProperty(key)) {
          this.symbols.push({ "code": data.symbols[key].code, "desc": data.symbols[key].description });
        }
      }
    });
  }
  selectedCur(ev) {
    let selCur = ev.detail.value;
    let a = selCur.split("|");
  }

}
