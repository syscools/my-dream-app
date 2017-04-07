import { 
    Component,trigger,state,style,transition,animate,keyframes
} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<button (click)='toggleState()'>click me</button>
        <h3 [@myTrigger]='state'>A series of random numbers</h3>
        <ul >
            <li *ngFor="let item of items" [@myTrigger]='state'><span >{{ item }}</span></li>
        </ul>`,
    styles: [`
        li {
            background: #f1f1f1;
        }
    `],
    animations: [
        trigger('myTrigger',[
    
            state('state3',style({
                background: '#ff0000'
            })),
              
            state('state1',style({
                background: '#00ff00'
            })),

            //transition('* => *',animate('500ms ease-in'))

            /*
            transition('* => *',[
                style({ transform: 'scale(2)' })
            ]),
            */
           
            /* 
            transition('* => *',[
                style({ opacity: '0',transform:'translateY(20px)' }),
                animate('500ms')
            ])
            */
        ])
    ]
})

export class AppComponent {

    state: string = 'unknown';
    items = [];
    state_values = ['state1','state2','state3','state4','state5'];

    constructor() { 

    }

    toggleState() {
        var r = Math.floor(Math.random() * this.state_values.length);
        var q = Math.random();
        this.state = this.state_values[r];
        console.log(this.state);
        this.items.push(q.toString()); 
    }
}
