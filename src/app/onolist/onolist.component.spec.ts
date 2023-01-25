import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnolistComponent } from './onolist.component';

describe('OnolistComponent', () => {
  let component: OnolistComponent;
  let fixture: ComponentFixture<OnolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnolistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
