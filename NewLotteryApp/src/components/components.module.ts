import { NgModule } from '@angular/core';
import { AdButtonComponent } from './ad-button/ad-button';
import { LottoTicketComponent } from './lotto-ticket/lotto-ticket';
import { CommonModule } from '@angular/common';
@NgModule({
	declarations: [AdButtonComponent,
    LottoTicketComponent],
	imports: [CommonModule],
	exports: [AdButtonComponent, LottoTicketComponent]
})
export class ComponentsModule {}
