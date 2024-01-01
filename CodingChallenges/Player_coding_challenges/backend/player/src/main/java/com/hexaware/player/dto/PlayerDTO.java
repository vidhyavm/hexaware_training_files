package com.hexaware.player.dto;

public class PlayerDTO {

	private long playerId;
	private String playerName;
	private int jerserNo;
	private String role;
	private int totalMatches;
	private String teamName;
	private String country;
	private String description;
	
	
	public PlayerDTO(long playerId, String playerName, int jerserNo, String role, int totalMatches, String teamName,
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


	public PlayerDTO() {
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
		return "PlayerDTO [playerId=" + playerId + ", playerName=" + playerName + ", jerserNo=" + jerserNo + ", role="
				+ role + ", totalMatches=" + totalMatches + ", teamName=" + teamName + ", country=" + country
				+ ", description=" + description + "]";
	}


	
	
	
	
	
}
