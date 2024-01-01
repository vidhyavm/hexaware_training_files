package com.hexaware.player.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hexaware.player.dto.PlayerDTO;
import com.hexaware.player.entity.Player;
import com.hexaware.player.service.IPlayerService;


@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/api/players")
public class PlayerController {

	@Autowired
	IPlayerService service;
	
	@PostMapping("/add")
	public Player addPlayer(@RequestBody PlayerDTO  playerDTO) {
		return service.addPlayer(playerDTO);
	}
	
	@GetMapping("/getall")
	public List<Player> getAllPlayers(){
		return service.getAllPlayer();
	}
	
	 @DeleteMapping("/delete/{jerserNo}/{playerName}")
	    public void deletePlayer(@PathVariable int jerserNo,@PathVariable String playerName) {
	       service.deleteByJerseyNumber(jerserNo, playerName);
	    }
	
	}
