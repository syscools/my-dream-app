import { 
    Component,trigger,state,style,transition,animate,keyframes
} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<button [@myTrigger]='state' (click)='toggleState()'>{{ ident }}</button>`,
    styles: [],
    animations: [
        trigger('myTrigger',[

            state('small',style({
                backgroundColor: '#FFFF00',
                transform: 'scale(1)'
            })),

            state('medium',style({
                backgroundColor: '#00FF00',
                transform: 'scale(10) translate(23px,9px)'
            })),

            state('large',style({
                backgroundColor: '#ff0000',
                transform: 'scale(5.4)'
            })),

            transition('* <=> *',animate('1000ms'))

            /* 
            transition('* <=> *', [
                //style({backgroundColor:'#0000ff',transform: 'translateX(100px)'}),
                //style({backgroundColor: '#000000',transform: 'translateX(100px) translateY(100px)'}),
                style({backgroundColor: '#000000',transform: 'translate(20px,200px)'}),
                animate('1000ms')
            ])
            */
            
        ])
    ]
})
export class AppComponent {
    state: string = 'medium';
    n = 0;
    ident = 'dexter';
    names = ['alpha','abcdef','gamma','delta'];
    //names = ['AAA','BBB','CCC','DDD','EEE','FFF'];

    toggleState() {
        var i = this.n % 3;
        switch (i) {
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
        this.ident = this.names[i];
        this.n++;
    }
}
