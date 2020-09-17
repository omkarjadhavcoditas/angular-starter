import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { LogoutGuard } from './logout.guard';

describe('LogoutGuard', () => {
  let guard: LogoutGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule]
    });
    guard = TestBed.inject(LogoutGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
