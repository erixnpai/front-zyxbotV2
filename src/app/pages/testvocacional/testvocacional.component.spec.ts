import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestvocacionalComponent } from './testvocacional.component';

describe('TestvocacionalComponent', () => {
  let component: TestvocacionalComponent;
  let fixture: ComponentFixture<TestvocacionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestvocacionalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestvocacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
