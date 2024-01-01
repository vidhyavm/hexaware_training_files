import { Component } from '@angular/core';
import { Players } from 'src/app/model/players';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-addplayers',
  templateUrl: './addplayers.component.html',
  styleUrls: ['./addplayers.component.css']
})
export class AddplayersComponent {

  constructor(private  playerService:PlayersService){}

  addPlayers(data:Players){

    this.playerService.add(data).subscribe(
      (player)=>{console.log('Add Player is:'+player);}
    )


  }

}
