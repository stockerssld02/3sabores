/* tslint:disable:no-unused-variable */

import { inject, TestBed } from '@angular/core/testing';

import { GrpcService } from './grpc.service';

describe('Service: GrpcService', () => {
  let grpcService: GrpcService
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GrpcService]
    });

    grpcService = TestBed.inject(GrpcService)
  });

  it('should call the gRPC service and return response', () => {
    const mockResponse = 'Mock response'
    const serviceClientMock = jasmine.createSpyObj('serviceClient', ['methodName']);

    serviceClientMock.methodName.and.callFake((request: any, options: any, callback: any) => {
      //Simula respuesta
      callback(null, mockResponse)
    })

    const methodName = 'yourMethodName'
    const requestMapFnMock = jasmine.createSpy('requestMapFn').and.returnValue({}); // Puedes ajustar el valor devuelto según tu lógica de mapeo

    // Llamada al método callService
    grpcService.callService(serviceClientMock, {}, methodName, requestMapFnMock).subscribe(response => {
      expect(response).toEqual(mockResponse); // Verifica que la respuesta sea igual a la respuesta esperada
    });

    expect(serviceClientMock.methodName).toHaveBeenCalled(); // Verifica que se haya llamado al método del cliente
    expect(requestMapFnMock).toHaveBeenCalled(); // Verifica que se haya llamado a la función de mapeo de solicitud

  })

  it('should ...', inject([GrpcService], (service: GrpcService) => {
    expect(service).toBeTruthy();
  }));
});
