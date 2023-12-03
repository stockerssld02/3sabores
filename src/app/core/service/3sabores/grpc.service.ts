import { GrpcWebClientBase } from 'grpc-web';
import { from, Observable } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GrpcService {
  constructor(private grpcWebClient: GrpcWebClientBase) { }

  callService<TRequest, TResponse>(
    serviceClient: any, // Cliente gRPC generado
    requestMessage: TRequest,
    methodName: string,
    requestMapFn: (message: any) => TRequest // Función para mapear la solicitud
  ): Observable<TResponse> {
    const client = new serviceClient('localhost:6565');
    const request = requestMapFn(requestMessage);

    return from(new Promise<TResponse>((resolve, reject) => {
      client[methodName](request, {}, (err: any, response: TResponse) => {
        if (err) {
          reject(err);
        } else {
          resolve(response);
        }
      });
    }));
  }
}
