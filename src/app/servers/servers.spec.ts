import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Servers } from './servers';

describe('Servers', () => {
  let component: Servers;
  let fixture: ComponentFixture<Servers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Servers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Servers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
