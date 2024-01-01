package com.hexaware.player.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.hexaware.player.entity.Player;


public interface PlayerRepository  extends JpaRepository<Player,Long>{

	@Modifying
	@Query("delete from Player p where p.jerserNo= ?1 and p.playerName= ?2")
	public void deleteByJerseyNumber(int jerseyNo,String playerName);

}
