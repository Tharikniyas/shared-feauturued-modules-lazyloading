import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentSharedRoutingModule } from './component-shared-routing.module';
import { SharedModule } from '../module/shared/shared.module';
import { MailboxModule } from '../mail/mailbox/mailbox/mailbox.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentSharedRoutingModule,
    SharedModule,
    MailboxModule
  ],
  exports:[MailboxModule,SharedModule]
})
export class ComponentSharedModule { }
