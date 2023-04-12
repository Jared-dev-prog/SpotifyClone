import { TestBed } from '@angular/core/testing';

import { InyectSessionInterceptor } from './inyect-session.interceptor';

describe('InyectSessionInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      InyectSessionInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: InyectSessionInterceptor = TestBed.inject(InyectSessionInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
