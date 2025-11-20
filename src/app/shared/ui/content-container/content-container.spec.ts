import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentContainer } from './content-container';

describe('ContentContainer', () => {
  let component: ContentContainer;
  let fixture: ComponentFixture<ContentContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
