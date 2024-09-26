import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapainteractivoComponent } from './mapainteractivo.component';

describe('MapainteractivoComponent', () => {
  let component: MapainteractivoComponent;
  let fixture: ComponentFixture<MapainteractivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapainteractivoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapainteractivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
