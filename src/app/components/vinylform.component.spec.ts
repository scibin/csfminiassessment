import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VinylformComponent } from './vinylform.component';

describe('VinylformComponent', () => {
  let component: VinylformComponent;
  let fixture: ComponentFixture<VinylformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VinylformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VinylformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
