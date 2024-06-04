import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../../services/producto.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import Producto from '../../../models/producto';
 
@Component({
  selector: 'app-producto-listar',
  standalone: true,
  imports: [CommonModule, MatTableModule, FormsModule, MatButtonModule, MatInputModule, MatCardModule, MatListModule, MatIconModule],
  templateUrl: './producto-listar.component.html',
  styleUrls: ['./producto-listar.component.css']
})
export class ProductoListarComponent implements OnInit {
  isEdit: boolean = false;
    productos: Producto[] = [];
  producto: Producto = new Producto();
 
  constructor(private productoService: ProductoService) {
  }

  ngOnInit() {
    this.getProductos();
  }

  getProductos() {
    this.productoService.getProductos().subscribe((productos: Producto[]) => {
      this.productos = productos;  // Asegúrate de que `productos` es un array


    });
  }

  getProductoByCod(cod: number) {
    this.productoService.getProductoByCod(cod).subscribe((producto: Producto) => {
       this.producto = { ...producto }; // Asignar también a this.producto para que se refleje en el formulario
      this.isEdit = true;
    });
  }
  
  cancelarEdicion() {
    this.isEdit = false;
    this.producto = new Producto();

  }

  

  createProducto(producto: Producto) {
    this.productoService.createProducto(producto).subscribe((productos: Producto) => {
      this.productos.push(productos);
      this.producto = new Producto();  // Limpiar el formulario
      this.getProductos()
    });

  }



  updateProducto(producto: Producto) {
    this.productoService.updateProducto(producto).subscribe((productos: Producto) => {
      this.getProductos(); // Refrescar la lista de productos
      this.isEdit = false
      this.producto = new Producto();
    });
  }

  deleteProducto(producto:Producto) {

  const eliminar= confirm("Eliminar ?:"+producto.nombre)
if (eliminar) {
  this.productoService.deleteProducto(producto.cod).subscribe(() => {
    this.getProductos(); // Refrescar la lista de productos
  });
}
    
  }
}
