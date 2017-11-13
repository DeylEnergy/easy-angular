import { Component } from '@angular/core';

@Component ({
  selector: 'sample',
  template: `
    Hello from Angular! I'm {{ action }}
  `
})
export class SampleComponent {
  action:string = 'working';
}
