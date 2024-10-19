import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmapaComponent } from './viewmapa.component';

describe('ViewmapaComponent', () => {
  let component: ViewmapaComponent;
  let fixture: ComponentFixture<ViewmapaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewmapaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewmapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
