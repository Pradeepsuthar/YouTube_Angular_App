import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenulistleftComponent } from './menulistleft.component';

describe('MenulistleftComponent', () => {
  let component: MenulistleftComponent;
  let fixture: ComponentFixture<MenulistleftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenulistleftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenulistleftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
