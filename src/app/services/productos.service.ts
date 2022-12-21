import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Producto } from '../interface/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private endponitApiCactus = ' http://localhost:3000/cactus';
  private endpointApiPlantas = 'http://localhost:3000/plantas';
  private endpointApiPorta = 'http://localhost:3000/porta';
  private endpointApiMacetaD = 'http://localhost:3000/macetasD';
  private endpointApiMacetaP = 'http://localhost:3000/macetasP';
  private endpointApiMacetaB = 'http://localhost:3000/macetasB';
  private endpointApiInsumos = 'http://localhost:3000/insumos';

  public kit: Producto[] = [];

  constructor(
    private httpClient: HttpClient
  ) { }

  public getCactus(): Observable<any> {
    return this.httpClient.get(this.endponitApiCactus)
  }

  public getPlantas(): Observable<any> {
    return this.httpClient.get(this.endpointApiPlantas)
  }

  public getPorta(): Observable<any> {
    return this.httpClient.get(this.endpointApiPorta)
  }

  public getMacetaD(): Observable<any> {
    return this.httpClient.get(this.endpointApiMacetaD)
  }

  public getMacetaP(): Observable<any> {
    return this.httpClient.get(this.endpointApiMacetaP)
  }

  public getMacetaB(): Observable<any> {
    return this.httpClient.get(this.endpointApiMacetaB)
  }
  
  public getInsumos(): Observable<any> {
    return this.httpClient.get(this.endpointApiInsumos)
  }

}

