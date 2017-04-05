import { 
    Component,trigger,state,style,transition,animate,keyframes
} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<button (click)='toggleState()'>Respect HTML</button>
        <ul>
            <li *ngFor="let item of items" [@myTrigger]='state'>{{ item }}</li>
        </ul>`,
    styles: [`
        ul { list-style-type:node;margin:30px 30px 0 0;padding:0;}
        li {
            padding:15px;
            width:100%;
            background:#f1f1f1;
            margin-bottom:2px;
            font-weight:bold;
        }
    `],
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
                style({ opacity: '0',transform:'translateY(50px)' }),
                animate('500ms 3s ease-out')
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
