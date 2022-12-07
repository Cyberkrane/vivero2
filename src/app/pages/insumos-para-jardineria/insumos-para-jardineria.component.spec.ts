import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsumosParaJardineriaComponent } from './insumos-para-jardineria.component';

describe('InsumosParaJardineriaComponent', () => {
  let component: InsumosParaJardineriaComponent;
  let fixture: ComponentFixture<InsumosParaJardineriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsumosParaJardineriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsumosParaJardineriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
