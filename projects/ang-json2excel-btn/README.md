# AngJson2excelBtn- Angular JSON to excel (sheet) button AngJson2excelBtn

# What is this library for?

This library is a button that will convert a JSON object to an excel sheet. It is a wrapper around the [SheetJS](https://www.npmjs.com/package/xlsx?activeTab=readme) library. It is a simple button that you can add to your Angular application and it will convert a JSON object to an excel sheet. All it requires is an array of objects. The library will take care of the rest. 

## High level guide to using the library

1. Install the library
2. Import the library in your app.module.ts file
3. Add the button to your component.html file
4. Define an array of objects to your component.ts file
5. Format and map through the array of objects in order to set the keys and values that you want to export to excel and store in a method or variable (**Important**)
5. Add the fileName and sheetName to your component.ts file
6. Add the styling to your component.css file or style file (optional)

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.0.

## Demo

You can find a demo of the library [here](https://ang-json2excel-btn-demo.netlify.app/).

## Installation

To install this library, run:

```bash
$ npm install ang-json2excel-btn --save
```

## Consuming your library

You can import your library in any Angular application by running:

```bash
$ npm install ang-json2excel-btn
```

and then from your Angular `AppModule`:

```typescript
import { AngJson2excelBtnModule } from 'ang-json2excel-btn';

@NgModule({
  imports: [
    ...
    AngJson2excelBtnModule.forRoot(),
    ...
  ],
  ...
})
export class AppModule { }
```

Once your library is imported, you can use its components, directives and pipes in your Angular application:

```xml
<!-- You can now use your library component in app.component.html -->
<ang-json2excel-btn [json]="json" [fileName]="fileName" [sheetName]="sheetName"></ang-json2excel-btn>
```

## Attributes

| Attribute | Type   | Required | Default  | Description                                       |
| --------- | ------ | -------- | -------- | ------------------------------------------------- |
| json      | object | true     | -        | The JSON object to be converted to an excel sheet |
| fileName  | string | false    | 'export' | The name of the excel file                        |
| sheetName | string | false    | 'Sheet1' | The name of the excel sheet                       |

## Example

### Your component.ts file

```typescript
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "ang-json2excel-btn";
  json = [
    {
      name: "John",
      age: 30,
      city: "New York",
    },
    {
      name: "Peter",
      age: 40,
      city: "London",
    },
    {
      name: "Amy",
      age: 50,
      city: "Sydney",
    },
  ];
  fileName = "myExport";
  sheetName = "MySheet";

  //   formating the json object to be exported to excel
  constructor() {
    this.data = this.json.map((item: any) => {
      return {
        name: item.name,
        age: item.age,
        car: item.car,
      };
    });
  }
}
```
> Note: The json object must be an array of objects. And the reason for formatting and mapping the json object is because the XLXS library requires the  array of objects to come with only the keys and values that you want to export to excel. So if you have a json object that has more keys than the ones you want to export to excel, you will have to format it like the example above.
### Your component.html file
```xml
<ang-json2excel-btn [json]="json" [fileName]="fileName" [sheetName]="sheetName"></ang-json2excel-btn>
```

## Styling

The button has a class of `ang-json2excel-btn` that can be used to style the button with the help of :host and ::ng-deep.

```css
:host ::ng-deep .ang-json2excel-btn {
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
```

## Compatibility

This library is compatible with Angular 14 and above.

## Code scaffolding

Run `ng generate component component-name --project ang-json2excel-btn` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project ang-json2excel-btn`.

> Note: Don't forget to add `--project ang-json2excel-btn` or else it will be added to the default project in your `angular.json` file.

## Build

Run `ng build ang-json2excel-btn` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build ang-json2excel-btn`, go to the dist folder `cd dist/ang-json2excel-btn` and run `npm publish`.

## Running unit tests

Run `ng test ang-json2excel-btn` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
