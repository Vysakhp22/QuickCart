import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productRegisterForm = this.fb.group({
    productName: [''],
    quantity: [''],
    basePrice: [''],
    tax: ['5%'],
    totalAmount: ['']
  });
  constructor(private fb: FormBuilder) { }

  public amountCalc() {
  }
  public onSubmit() {
    if (this.productRegisterForm.invalid) return;
    console.log(this.productRegisterForm.value)
  }

  ngOnInit() {
    this.productRegisterForm.valueChanges.subscribe(() => {
      this.productRegisterForm.patchValue({
        totalAmount: String(Number(this.productRegisterForm.value.quantity) * (Number(this.productRegisterForm.value.basePrice) + 5))
      }, { emitEvent: false });
    });
  }

}
