import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface Checkout {
  fullName: string;
  address: string;
  cardNumber: number;
}

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  checkoutForm!: FormGroup;
  isCheckoutComplete = false;

  @Input() cartTotal?: number = 0;
  @Output() checkoutComplete = new EventEmitter<Checkout>();

  constructor() { }

  ngOnInit(): void {
    this.checkoutForm = new FormGroup({
      fullName: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      cardNumber: new FormControl('', [Validators.required])
    });
  }

  submit(): void {
    this.checkoutForm.markAllAsTouched();
    if (this.checkoutForm.valid) {
      const formData = this.checkoutForm.value;
      this.checkoutComplete.emit(formData);
    }
  }
}
