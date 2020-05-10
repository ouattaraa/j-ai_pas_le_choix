import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainMessageComponent } from './contain-message.component';

describe('ContainMessageComponent', () => {
  let component: ContainMessageComponent;
  let fixture: ComponentFixture<ContainMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
