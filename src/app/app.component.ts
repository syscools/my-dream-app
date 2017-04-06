import { 
    Component,trigger,state,style,transition,animate,keyframes
} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<button [@myTrigger]='state' (click)='toggleState()'>Respect HTML</button>`,
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

            //transition('large <=> small',animate('100ms'))
        ])
    ]
})
export class AppComponent {
    state: string = 'small';
    n = 0;

    toggleState() {

        switch (this.n % 3) {
            case 0:
            console.log("case: 0");
            this.state = 'small';
            break

            case 1:
            console.log("case: 1");
            this.state = 'medium';
            break;

            case 2:
            console.log("case: 2");
            this.state = 'large';
            break;

            default:
            console.log("case: default");
            break
        }

        this.n++;
    }
}
