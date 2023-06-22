/*
 * @license
 * Copyright Infosim GmbH & Co. KG
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'snx-header',
  template: `
    <div class="header w-100 d-flex align-items-center">
      <img
        src="assets/sn_portal_logo.svg"
        width="149"
        height="20"
        class="mx-3"
        alt="StableNet®"
      />
    </div>
  `,
  styles: [
    `
      .header {
        background: #002846;
        height: 56px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class HeaderComponent {}
