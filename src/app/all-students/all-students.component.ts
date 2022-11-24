import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css']
})
export class AllStudentsComponent implements OnInit {

  allStudentSource:Student[] =[];
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'gender', 'age'];

  constructor(private studentService:StudentsService) { }

  ngOnInit(): void {
    this.get();
  }

  get(){
    this.studentService.get().subscribe((data)=>{
      this.allStudentSource = data;
    });
  }

}
