import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import axios from 'axios';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-genarate-component',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './genarate-component.component.html',
  styleUrl: './genarate-component.component.scss'
})
export class GenarateComponentComponent implements OnInit {
tab:string="";
tableData:any=[];
editIndex=-1

constructor(
){

}
  ngOnInit(): void {
   this.getData();
  }


onClickTab(key:string=""){
 this.tab=key;
}

addTo(){ 
  if(this.editIndex>-1){
    alert('please fill the contant')
    return
  }
  this.editIndex=this.tableData.length
  this.tableData.push(
    {
    first_name: '',
    last_name: '',
    emailId: '',
    age: null,
    gender: '',
    mobilenumber: '',
    pan_no: '',
    adhaar_no: '',
    status: false,
    }
  )
}

  async deleteTo(id:any,index:number){

  if(id){
    try {
      const response = await axios.delete(`https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile/${id}`);
      this.getData();
      this.editIndex=-1
      console.log(response)
    } catch (error) {
      console.error('Error fetching data:', error);
      // throw error;
    }
  } else{
    this.editIndex=-1
    this.tableData.splice(index,1)
  }

}

  async onSaveTo(index:number){
    if(this.editIndex==-1){
      this.editIndex=index;
      
      return}

  try {
    const response = !this.tableData[index].id? await axios.post(`https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile`,this.tableData[index]):await axios.put(`https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile/${this.tableData[index].id}`,this.tableData[index]);
    this.getData();
    this.editIndex=-1
    console.log(response.data)
  } catch (error) {
    console.error('Error fetching data:', error);
    // throw error;
  }
}

async getData() {
  try {
    const response = await axios.get('https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile');
    console.log(response.data);
    this.tableData=response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    // throw error;
  }
}

}
