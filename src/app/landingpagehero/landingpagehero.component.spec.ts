import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingpageheroComponent } from './landingpagehero.component';

describe('LandingpageheroComponent', () => {
  let component: LandingpageheroComponent;
  let fixture: ComponentFixture<LandingpageheroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingpageheroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandingpageheroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
