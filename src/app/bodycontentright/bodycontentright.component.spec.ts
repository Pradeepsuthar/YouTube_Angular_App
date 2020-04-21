import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodycontentrightComponent } from './bodycontentright.component';

describe('BodycontentrightComponent', () => {
  let component: BodycontentrightComponent;
  let fixture: ComponentFixture<BodycontentrightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodycontentrightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodycontentrightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
