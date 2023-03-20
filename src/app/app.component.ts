import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  json = [
    {
      "name": "John",
      "age": 30,
      "car": null
    },
    {
      "name": "Peter",
      "age": 40,
      "car": "Ford"
    },
    {
      "name": "Amy",
      "age": 50,
      "car": "Toyota"
    }
  ];

  stylings: any = [
    {
      color: "green",
      background: "yellow",
      width: '100%',
      cursor: 'pointer',
      margin: '10px 0',
      padding: '10px',
      border: 'none',
      borderRadius: '5px',
      height: 'auto',
    },
  ]

  data: any = []
  constructor() {
    this.data = this.json.map((item: any) => {
      return {
        "name": item.name,
        "age": item.age,
        "car": item.car
      }
    }
    )
  }
}
