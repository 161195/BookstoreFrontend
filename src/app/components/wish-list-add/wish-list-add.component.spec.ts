import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishListAddComponent } from './wish-list-add.component';

describe('WishListAddComponent', () => {
  let component: WishListAddComponent;
  let fixture: ComponentFixture<WishListAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WishListAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WishListAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
