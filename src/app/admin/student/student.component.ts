import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {StudentService} from '../../shared/services/student.service';
import {Subscription} from 'rxjs';
import {AuthService} from '../../shared/services/auth.service';

@Component({
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit, OnDestroy {

  students = [];

  studentForm: FormGroup;

  studentSubs: Subscription;
  studentGetSubs: Subscription;
  studentDeleteSubs: Subscription;
  studentUpdateSubs: Subscription;
  idEdit: any;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private studentService: StudentService) {
  }

  ngOnInit(): void {

    this.loadStudents();

    this.studentForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      age: '',
      grade: ['',[Validators.required]],
      urlImage: ''
    });

  }

  loadStudents(): void {
    this.students = [];
    const userId = this.authService.getUserId();
    this.studentGetSubs = this.studentService.getStudent().subscribe(res => {
      Object.entries(res).map((p: any) => this.students.push({id: p[0], ...p[1]}));
    });
  }

  onDelete(id: any): void {
    this.studentDeleteSubs = this.studentService.deleteStudent(id).subscribe(
      res => {
        console.log('RESPONSE: ', res);
        this.loadStudents();
      },
      err => {
        console.log('ERROR: ');
      }
    );
  }

  onEdit(student): void {
    this.idEdit = student.id;
    this.studentForm.patchValue(student);
  }

  onUpdateStudents(): void {
    this.studentUpdateSubs = this.studentService.updateStudent(
      this.idEdit,
      {
        ...this.studentForm.value,
        ownerId: this.authService.getUserId()
      }
    ).subscribe(
      res => {
        console.log('RESP UPDATE: ', res);
        this.loadStudents();
      },
      err => {
        console.log('ERROR UPDATE DE SERVIDOR');
      }
    );
  }

  onEnviar2(): void {
    this.studentSubs = this.studentService.addStudent({
      ...this.studentForm.value,
      ownerId: this.authService.getUserId()
    }).subscribe(
      res => {
        console.log('RESP: ', res);
      },
      err => {
        console.log('ERROR DE SERVIDOR');
      }
    );

  }

  ngOnDestroy(): void {
    this.studentSubs ? this.studentSubs.unsubscribe() : '';
    this.studentGetSubs ? this.studentGetSubs.unsubscribe() : '';
    this.studentDeleteSubs ? this.studentDeleteSubs.unsubscribe() : '';
    this.studentUpdateSubs ? this.studentUpdateSubs.unsubscribe() : '';
  }

}
