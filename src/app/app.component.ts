import { 
    Component,trigger,state,style,transition,animate,keyframes/*@xxx, ChangeDetectorRef */
} from '@angular/core';

@Component({
    selector: 'app-root',

    template: `<button (click)='toggleState()' [@removeMe]='btnState'>Respect HTML</button>
        <ul>
            <li *ngFor="let item of items" [@myTrigger]='state' (@myTrigger.done)="animDone($event)" (@myTrigger.start)="animStart($event)">{{ item }}</li>
        </ul>
        {{ animDetails }}
        `,


    styles: [`
        ul { list-style-type:node; margin:30px 30px 0 0; padding:0;}
        li {
            padding: 15px;
            width: 100%;
            background: #f1f1f1;
            margin-bottom: 2px;
            font-weight: bold;
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
              
            //transition('* => *',animate('5000ms ease-in'))
            /*
            transition('void => *',[
                style({ opacity: '0', transform: 'translateY(50px)' }),
                //animate('500ms 0s ease-in')
                animate('500ms 0s ease-out')
            ])
            */

            transition('void => *',[
                animate(2000,keyframes([
                    style({opacity:0, transform: 'translateY(-30px)',offset:0}),
                    style({opacity:1, transform: 'translateY(5px) scale(1.2)',offset:0.3}),
                    style({opacity:1, transform: 'translateY(0)',offset:1})
                ]))
            ])

        ]),

        trigger('removeMe',[
            state('out',style({
                transform: 'scale(0)',
                opacity:0
            })),

            transition('* => out',[
                animate('500ms 0s ease-in',keyframes([
                    style({opacity:1,transform:'translateX(-8px)',offset: 0}),
                    style({opacity:1,transform:'translateX(0)',offset: 0.3}),
                    style({opacity:0,transform:'translateX(50px)',offset: 1})
                ]))
            ])  
        ])
    ]
})

export class AppComponent {
    state: string = 'extra-large';
    //items = [];
    items = new Array();
    animDetails:string = 'Waiting';
    btnState:string = 'in';
    
    /*@xxx
    constructor(private cdRef:ChangeDetectorRef) {

    } */

    toggleState() {
        this.items.push('apple : ' + this.state);
        this.state = "fadeIn";    
        this.btnState = 'out';
    }

    animStart(event:any) {
        console.log(event);
    }

    animDone(event:any) {
        this.animDetails = 'It took me ' + event.totalTime + 'ms to copmlete';
        console.log('Animation Finished!');
        //@xxx this.cdRef.detectChanges();
    }
}
