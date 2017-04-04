import { 
  Component,trigger,state,style,transition,animate,keyframes 
} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<button [@myTrigger]='state'>Respect HTML</button>`,
  styles: [],
  animations: [
    trigger('myTrigger',[
      //state()
      //transition()
    ])
  ]
})
export class AppComponent {
  state: string = "small";
}
