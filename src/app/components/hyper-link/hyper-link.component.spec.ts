import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HyperLinkComponent } from './hyper-link.component';

describe('HyperLinkComponent', () => {
  let component: HyperLinkComponent;
  let fixture: ComponentFixture<HyperLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HyperLinkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HyperLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
