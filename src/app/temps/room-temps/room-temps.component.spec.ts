import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomTempsComponent } from './room-temps.component';

describe('RoomTempsComponent', () => {
  let component: RoomTempsComponent;
  let fixture: ComponentFixture<RoomTempsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomTempsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomTempsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
