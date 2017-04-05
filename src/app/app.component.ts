import { 
    Component,trigger,state,style,transition,animate,keyframes
} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<button (click)='toggleState()'>Respect HTML</button>
        <ul>
            <li *ngFor="let item of items" [@myTrigger]='state'>{{ item }}</li>
        </ul>`,
    styles: [],
    animations: [
        trigger('myTrigger',[

            state('small',style({
                backgroundColor: '#cfd8dc',
                transform: 'scale(1)'
            })),

            state('large',style({
                backgroundColor: '#ff0000',
                transform: 'scale(5.4)'
            })),

            state('extra-large',style({
                backgroundColor: '#ff0000',
                transform: 'scale(5.4)'
            })),
              
            state('fadeIn',style({
                opacity: '1'
            })),
              
            //transition('* => *',animate('500ms ease-in'))
            transition('void => *',[
                style({ opacity: '0',transform:'translateY(20px)' }),
                animate('500ms')
            ])
        ])
    ]
})
export class AppComponent {
    state: string = 'extra-large';
    items = [];

    toggleState() {
        this.items.push('idiot : ' + this.state);
        this.state = "fadeIn";    
    }
}
