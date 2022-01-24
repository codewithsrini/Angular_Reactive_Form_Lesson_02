import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Units } from '../shared/model/Units';

@Component({
  selector: 'app-add-edit-bill',
  templateUrl: './add-edit-bill.component.html',
  styleUrls: ['./add-edit-bill.component.scss']
})
export class AddEditBillComponent implements OnInit {

  expenseForm: FormGroup;
  units: Units[] = [];

  constructor(private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { units: Units[] }) {

    this.expenseForm = this.fb.group({
      billNumber: [''],
      purchaseDate: [''],
      shopName: [''],
      particular: [''],
      quantity: [''],
      unit: [''],
      ratePerUnit: [''],
      amount: [''],
      billSettled: true
    });

    if (data.units) {
      this.units = data.units;
    }
  }

  ngOnInit(): void {
  }

  onSave(): void {
    console.log(this.expenseForm);
    console.log(this.expenseForm.getRawValue());
  }
}
