import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatusYSuculentasComponent } from './catus-y-suculentas.component';

describe('CatusYSuculentasComponent', () => {
  let component: CatusYSuculentasComponent;
  let fixture: ComponentFixture<CatusYSuculentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatusYSuculentasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatusYSuculentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
