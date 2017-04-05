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

    toggleState() {
        this.state = (this.state == 'small' ? 'large': 'small');
        console.log("toggle state = " + this.state);
    }
}
