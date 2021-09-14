import { HttpHeaders } from '@angular/common/http';

const noLoader = { 'no-loader': 'true' };

export const noLoadingSpinnerHttpOptions = {
  headers: new HttpHeaders(noLoader)
};




