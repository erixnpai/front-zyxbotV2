import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerotestvocacionalComponent } from './herotestvocacional.component';

describe('HerotestvocacionalComponent', () => {
  let component: HerotestvocacionalComponent;
  let fixture: ComponentFixture<HerotestvocacionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HerotestvocacionalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HerotestvocacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
