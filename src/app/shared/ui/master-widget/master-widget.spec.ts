import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterWidget } from './master-widget';

describe('MasterWidget', () => {
  let component: MasterWidget;
  let fixture: ComponentFixture<MasterWidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasterWidget]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterWidget);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
