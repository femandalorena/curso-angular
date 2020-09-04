import {Component, VERSION, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../../services/product.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, OnDestroy {

  products = [];
  productForm: FormGroup;

  productSubs: Subscription;
  productGetSubs: Subscription;
  productDeleteSubs: Subscription;
  productUpdateSubs: Subscription;
  idEdit: any;

  // nameControl = new FormControl();

  constructor(private formBuilder: FormBuilder,
              private productService: ProductService) {
  }

  ngOnInit(): void {

    this.loadProduct();

    this.productForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      type: ['', Validators.required],
      stock: '',
      size: '',
      urlImage: ''
    });

  }

  loadProduct(): void {
    this.products = [];
    this.productGetSubs = this.productService.getProducts().subscribe(res => {
      Object.entries(res).map((p: any) => this.products.push({id: p[0], ...p[1]}));
    });
  }

  onDelete(id: any): void {
    this.productDeleteSubs = this.productService.deleteProduct(id).subscribe(
      res => {
        this.loadProduct();
      },
      err => {
        console.log('ERROR: ');
      }
    );
  }


  getTalla(talla: number) {
    if (talla > 0 && talla < 21) return "XS";
    if (talla > 20 && talla < 31) return "S";
    if (talla > 30 && talla < 51) return "M";
    if (talla > 50 && talla < 71) return "L";
    if (talla > 70 && talla < 101) return "XL";
  }

  onEdit(product): void {
    this.idEdit = product.id;
    this.productForm.patchValue(product);
  }

  onUpdateProduct(): void {
    this.productUpdateSubs = this.productService.updateProduct(this.idEdit, this.productForm.value).subscribe(
      res => {
        console.log('RESP UPDATE: ', res);
        this.loadProduct();
      },
      err => {
        console.log('ERROR UPDATE DE SERVIDOR');
      }
    );
  }


  onEnviar2(): void {
    this.productSubs = this.productService.addProduct(this.productForm.value).subscribe(
      res => {
        console.log('RESP: ', res);
        this.loadProduct();
      },
      err => {
        console.log('ERROR DE SERVIDOR');
      }
    );

  }

  ngOnDestroy(): void {
    this.productSubs ? this.productSubs.unsubscribe() : '';
    this.productGetSubs ? this.productGetSubs.unsubscribe() : '';
    this.productDeleteSubs ? this.productDeleteSubs.unsubscribe() : '';
    this.productUpdateSubs ? this.productUpdateSubs.unsubscribe() : '';
  }



}