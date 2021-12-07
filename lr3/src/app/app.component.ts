import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<label>Введіть рядок:</label>
              <input [(ngModel)]="str" placeholder="">
              <input type ="button" (click)="goToLink(str)" value = "Open image">
              <br><br><img [src] = "str">
              `
})
export class AppComponent {
    str: string = ""
    goToLink(url: string) {
        window.open(url, "_blank");
    }
}
/*<input type ="button" (click)="goToLink(str)">
              <img [str] = "str"> */