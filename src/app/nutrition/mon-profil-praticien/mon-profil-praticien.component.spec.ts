import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonProfilPraticienComponent } from './mon-profil-praticien.component';

describe('MonProfilPraticienComponent', () => {
  let component: MonProfilPraticienComponent;
  let fixture: ComponentFixture<MonProfilPraticienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonProfilPraticienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonProfilPraticienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
