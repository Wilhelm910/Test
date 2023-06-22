import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderUsersComponent } from './render-users.component';

describe('RenderUsersComponent', () => {
  let component: RenderUsersComponent;
  let fixture: ComponentFixture<RenderUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RenderUsersComponent]
    });
    fixture = TestBed.createComponent(RenderUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
