import { NgModule } from '@angular/core';
import { AdButtonComponent } from './ad-button/ad-button';
import { LottoTicketComponent } from './lotto-ticket/lotto-ticket';
import { CommonModule } from '@angular/common';
import { TimerComponent } from './timer/timer';
import { IonicModule } from 'ionic-angular';
@NgModule({
    declarations: [AdButtonComponent,
        LottoTicketComponent,
        TimerComponent,
        ],
    imports: [CommonModule, IonicModule],
    exports: [AdButtonComponent, LottoTicketComponent,
        TimerComponent,
        ]
})
export class ComponentsModule { }
