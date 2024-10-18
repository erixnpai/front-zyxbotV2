import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeromapainteractivoComponent } from './heromapainteractivo.component';

describe('HeromapainteractivoComponent', () => {
  let component: HeromapainteractivoComponent;
  let fixture: ComponentFixture<HeromapainteractivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeromapainteractivoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeromapainteractivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
