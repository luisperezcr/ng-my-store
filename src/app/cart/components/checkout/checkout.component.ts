import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Checkout } from '../../../shared/models/checkout.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  checkoutForm!: FormGroup;

  @Input() cartTotal?: number = 0;
  @Output() checkoutComplete = new EventEmitter<Checkout>();

  constructor() { }

  ngOnInit(): void {
    this.checkoutForm = new FormGroup({
      fullName: new FormControl('', [Validators.required, Validators.minLength(5)]),
      address: new FormControl('', [Validators.required, Validators.minLength(10)]),
      cardNumber: new FormControl('', [Validators.required, Validators.minLength(14), Validators.pattern("^[0-9]*$")])
    });
  }

  submit(): void {
    this.checkoutForm.markAllAsTouched();
    if (this.checkoutForm.valid) {
      const formData = this.checkoutForm.value;
      this.checkoutComplete.emit({ ...formData, total: this.cartTotal });
    }
  }
}
