import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavGuaucheComponent } from './nav-guauche.component';

describe('NavGuaucheComponent', () => {
  let component: NavGuaucheComponent;
  let fixture: ComponentFixture<NavGuaucheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavGuaucheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavGuaucheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
