import { Component } from '@angular/core';

// {{}} interpolation - Component to DOM
// []   property binding - Component to DOM
// ()   event binding - DOM to Component

@Component({
  selector: 'my-app', // to use me, put <my-app> in index.html
  template: `
  <h1>{{name}}</h1>

  <fieldset>
    <!-- <img src={{image}}/> -->
    <!-- <img src="{{image}}"/> -->
    <img [src]="image"/>
  </fieldset>

  <fieldset>
    <label [style.color]="color">Favorite Color</label>
    <button (click)="clicked()">Toggle color</button>

    <!-- <select #selector (change)="colorChange(selector.value)"> -->

    <select (change)="colorChange($event.target.value)">
      <option>red</option>
      <option>blue</option>
      <option>green</option>
    </select>
  </fieldset>

  <button (click)="toggleAddress()">Toggle address</button>

  <div [hidden]="hideAddress">
    <fieldset>        
        <label>street: </label>{{street}}
        <label>{{city}}</label>
        <select (change)="regionChange($event.target.value)" value={{region}}>
          <option>East</option>
          <option>North</option>
          <option>South</option>
          <option>West</option>
        </select>

        <p>{{name}} is in the {{region}}</p>

    </fieldset>
  </div>

  

  `,
})

export class AppComponent  {
  name = 'Alex Smith';
  image = 'favicon.ico';
  color = 'red';

  street = 'main street';
  city = 'boston';
  region = 'South';

  hideAddress = false;

  clicked() {
    this.color = this.color === 'red' ? 'blue' : 'red';
  }

  colorChange(color: string) {
    this.color = color;
  }

  toggleAddress() {
    this.hideAddress = !this.hideAddress;
  }

  regionChange(region: string) {
      this.region = region;
  }

}
