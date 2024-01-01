package com.hexaware.player.service;

import java.util.List;

import com.hexaware.player.dto.PlayerDTO;
import com.hexaware.player.entity.Player;


public interface IPlayerService {

	
	public Player addPlayer(PlayerDTO playerDTO);

	public List<Player>getAllPlayer();
	
	public void deleteByJerseyNumber(int jerserNo,String playerName);
	
	
	
	
}
