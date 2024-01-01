package com.hexaware.player.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
public class Player {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "player_seq_generator")
    @SequenceGenerator(name = "player_seq_generator", sequenceName = "player_seq", allocationSize = 1)
	private long playerId;
	
	@NotEmpty
	@Size(max=50,message="give a player name")
	private String playerName;
	
	@NotNull(message="give a player jersey number")
	private int jerserNo;
	
	
	@NotEmpty
	@Size(max=50,message="give a role as bowler,bater,allrounder")
	private String role;


	@NotNull(message="give a player played no of matches")
	private int totalMatches;
  
	@NotEmpty
  @Size(max=50,message="give a teamname")
	private String teamName;
  
	
  @Size(max=50,message="give a country")
	private String country;
  
  @Size(max=150,message="give a description about player")
	private String description;
	
	
	public Player(long playerId, String playerName, int jerserNo, String role, int totalMatches, String teamName,
			String country,String description) {
		super();
		this.playerId = playerId;
		this.playerName = playerName;
		this.jerserNo = jerserNo;
		this.role = role;
		this.totalMatches = totalMatches;
		this.teamName = teamName;
		this.country = country;
		this.description=description;
	}


	public Player() {
		super();
	}


	public long getPlayerId() {
		return playerId;
	}


	public void setPlayerId(long playerId) {
		this.playerId = playerId;
	}


	public String getPlayerName() {
		return playerName;
	}


	public void setPlayerName(String playerName) {
		this.playerName = playerName;
	}


	public int getJerserNo() {
		return jerserNo;
	}


	public void setJerserNo(int jerserNo) {
		this.jerserNo = jerserNo;
	}


	public String getRole() {
		return role;
	}


	public void setRole(String role) {
		this.role = role;
	}


	public int getTotalMatches() {
		return totalMatches;
	}


	public void setTotalMatches(int totalMatches) {
		this.totalMatches = totalMatches;
	}


	public String getTeamName() {
		return teamName;
	}


	public void setTeamName(String teamName) {
		this.teamName = teamName;
	}


	public String getCountry() {
		return country;
	}


	public void setCountry(String country) {
		this.country = country;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	@Override
	public String toString() {
		return "Player [playerId=" + playerId + ", playerName=" + playerName + ", jerserNo=" + jerserNo + ", role="
				+ role + ", totalMatches=" + totalMatches + ", teamName=" + teamName + ", country=" + country
				+ ", description=" + description + "]";
	}


	
	
	

	
	
}
