package com.api.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import com.api.backend.models.TeamModel;
import com.api.backend.services.TeamService;

import java.util.ArrayList;
import java.util.Optional;

@RestController
@RequestMapping("/api/team")

public class TeamController {

    @Autowired
    private TeamService teamService;

    @GetMapping
    public ArrayList<TeamModel> getAllTeams() {
        return this.teamService.getAllTeams();
    }

    @GetMapping("/{id}")
    public Optional<TeamModel> getTeamById(@PathVariable("id") Long id) {
        return this.teamService.getTeamById(id);
    }

    @GetMapping("/name/{name}")
    public ArrayList<TeamModel> getTeamByName(@PathVariable("name") String name) {
        return this.teamService.getTeamByName(name);
    }


    @PostMapping
    public ResponseEntity<?> createTeam(@RequestBody TeamModel team) {
        try {
            TeamModel newUser = this.teamService.createTeam(team);
            return new ResponseEntity<>(newUser, HttpStatus.CREATED);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>("Error al crear la reserva", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/{id}")
    public Optional<TeamModel> updateTeam(@PathVariable("id") Long id, @RequestBody TeamModel request) {
        return this.teamService.updateTeam(id, request);
    }

    @DeleteMapping("/{id}")
    public void deleteTeam(@PathVariable("id") Long id) {
        Boolean result = this.teamService.deleteTeam(id);
        if (result) {
            System.out.println("Reserva eliminado");
        } else {
            System.out.println("Error eliminando reserva");
        }
    }
}