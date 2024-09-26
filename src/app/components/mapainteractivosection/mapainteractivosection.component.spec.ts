import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapainteractivosectionComponent } from './mapainteractivosection.component';

describe('MapainteractivosectionComponent', () => {
  let component: MapainteractivosectionComponent;
  let fixture: ComponentFixture<MapainteractivosectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapainteractivosectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapainteractivosectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
