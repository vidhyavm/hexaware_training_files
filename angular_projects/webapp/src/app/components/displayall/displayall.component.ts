import { Component, OnInit } from '@angular/core';
import { Players } from 'src/app/model/players';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-displayall',
  templateUrl: './displayall.component.html',
  styleUrls: ['./displayall.component.css']
})
export class DisplayallComponent {

  playerList:Players[] = [];
  
  

  constructor(private playerService:PlayersService){}


  

    
 getAllPlayers(){
  
  this.playerService.getAll().subscribe(
    (list)=>{this.playerList=list;console.log(list)}
  )
 }

 deleteByJerserNo(playerName:string,jerserNo:any){

  this.playerService.delete(playerName,jerserNo).subscribe( (data)=>{ console.log("Deleted "+data),this.getAllPlayers();});

      
  

 }



 



}
