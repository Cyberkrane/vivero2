import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortaMacetasComponent } from './porta-macetas.component';

describe('PortaMacetasComponent', () => {
  let component: PortaMacetasComponent;
  let fixture: ComponentFixture<PortaMacetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortaMacetasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortaMacetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
