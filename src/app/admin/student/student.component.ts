import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StudentService } from '../../shared/services/student.service';
import { Subscription } from 'rxjs';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'student',
  templateUrl: './student.component.html'
})
export class StudentComponent implements OnInit {
	 
	students = [];
	primary = [];
	secondary = [];

	studentForm: FormGroup;

  studentGetSub: Subscription;
  studentDelSubs: Subscription;
studentUpdateSubs: Subscription;
  idEdit : any;

	@Input() student: any;
	@Output() formForSide = new EventEmitter();

	constructor(private formBuilder: FormBuilder,
              private studentService: StudentService,
              private authService: AuthService) {
		this.loadStudents();
	}

	ngOnInit(): void {
		this.studentForm = this.formBuilder.group({
      name: '',
      age: '',
      grade: '',
      urlImage: ''
    });
	}

	loadStudents() : void {
    this.students = [];
    this.primary = [];
    this.secondary = [];
    const idUser = this.authService.getUserId();
    this.studentGetSub = this.studentService.getStudent().subscribe(res => {

      Object.entries(res).map((p: any) => this.students.push({id: p[0], ...p[1]}));
    });
  }



  onEdit(student): void {
    this.idEdit = student.id;
    this.studentForm.patchValue(student);
  }

  onUpdateProduct(): void {
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

  /*onEnviar() {
    console.log('VALOR: ', this.nameConatrol.value);
  }*/

  onEnviar2(): void {
    this.studentDelSubs = this.studentService.addStudent({
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

  onDelete(id: any) : void {
    this.studentDelSubs = this.studentService.deleteStudent(id).subscribe(res => {
      console.log("DELETE Response: ", res);
      this.loadStudents();
      window.location.reload();
    },
    err => {
      console.log("DELETE Error: ", err)
    });
  }

}