package com.api.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.api.backend.models.PlayerModel;
import com.api.backend.services.PlayerService;

import java.util.ArrayList;
import java.util.Optional;

@RestController
@RequestMapping("/api/player")
public class PlayerController {

    @Autowired
    private PlayerService playerService;

    @GetMapping
    public ArrayList<PlayerModel> getAllPlayers() {
        return this.playerService.getAllPlayers();
    }

    @GetMapping("/{id}")
    public Optional<PlayerModel> getPlayerById(@PathVariable("id") Long id) {
        return this.playerService.getPlayerById(id);
    }

    @PostMapping
    public ResponseEntity<?> createPlayer(@RequestBody PlayerModel field) {
        try {
            PlayerModel newPlayer = this.playerService.createPlayer(field);
            return new ResponseEntity<>(newPlayer, HttpStatus.CREATED);
        } catch (Exception e) {
            e.printStackTrace(); // Imprime la excepción en la consola para su diagnóstico
            return new ResponseEntity<>("Error al crear cancha", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/{id}")
    public Optional<PlayerModel> updatePlayer(@PathVariable("id") Long id, @RequestBody PlayerModel request) {
        return this.playerService.updatePlayer(id, request);
    }
    
}
