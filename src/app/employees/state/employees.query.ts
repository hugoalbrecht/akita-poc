import { Injectable } from '@angular/core'
import { Query } from '@datorama/akita'
import { Observable } from 'rxjs'
import { Employee, EmployeesState, EmployeesStore } from '..'

@Injectable({ providedIn: 'root' })
export class EmployeesQuery extends Query<EmployeesState> {
  employees$: Observable<Employee[]>

  isLoading$: Observable<boolean>

  constructor(protected override store: EmployeesStore) {
    super(store)
    this.employees$ = this.select('employees')
    this.isLoading$ = this.selectLoading()
  }
}
