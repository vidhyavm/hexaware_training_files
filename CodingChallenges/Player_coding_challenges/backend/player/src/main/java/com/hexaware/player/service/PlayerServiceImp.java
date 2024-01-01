package com.hexaware.player.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hexaware.player.dto.PlayerDTO;
import com.hexaware.player.entity.Player;
import com.hexaware.player.repository.PlayerRepository;

@Service
public class PlayerServiceImp implements IPlayerService {

	@Autowired
	PlayerRepository repo;

	@Override
	public Player addPlayer(PlayerDTO playerDTO) {

		Player player=new Player();
		player.setPlayerName(playerDTO.getPlayerName());
		player.setJerserNo(playerDTO.getJerserNo());
		player.setRole(playerDTO.getRole());
		player.setTotalMatches(playerDTO.getTotalMatches());
		player.setTeamName(playerDTO.getTeamName());
		player.setCountry(playerDTO.getCountry());	
		player.setDescription(playerDTO.getDescription());
		return  repo.save(player);
	}

	@Override
	public List<Player> getAllPlayer() {
		
		return repo.findAll();
	}

	@Override
	@Transactional
	public void deleteByJerseyNumber(int jerserNo, String playerName) {
		
		repo.deleteByJerseyNumber(jerserNo,playerName);
	}
	

	


	

	
	

	
}
