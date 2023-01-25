import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOnomatopia3Component } from './create-onomatopia3.component';

describe('CreateOnomatopia3Component', () => {
  let component: CreateOnomatopia3Component;
  let fixture: ComponentFixture<CreateOnomatopia3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateOnomatopia3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateOnomatopia3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
