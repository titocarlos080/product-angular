import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import Producto from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  baseUrl: string = 'http://localhost:3000/productos';
       
  constructor(private http: HttpClient) { }

  // Obtener todos los productos
  public getProductos(): Observable<Producto[]> {
    return this.http.get< Producto[] >(this.baseUrl);  
  
  }

  // Obtener un producto por ID
  public getProductoByCod(id: number): Observable<Producto> {
    return this.http.get<Producto>(`${this.baseUrl}/${id}`);
  }

  // Crear un nuevo producto
  public createProducto(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(this.baseUrl, producto);
  }

  // Actualizar un producto existente
  public updateProducto( producto: Producto): Observable<Producto> {
    return this.http.put<Producto>(`${this.baseUrl}/${producto.cod}`, producto);
  }

  // Eliminar un producto
  public deleteProducto(id: number): Observable<Producto> {
    return this.http.delete<Producto>(`${this.baseUrl}/${id}`);
  }
}
