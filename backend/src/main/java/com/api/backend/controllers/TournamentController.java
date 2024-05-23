package com.api.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.api.backend.models.TournamentModel;
import com.api.backend.services.TournamentService;

import java.util.ArrayList;
import java.util.Optional;

@RestController
@RequestMapping("/api/tournament")

public class TournamentController {

    @Autowired
    private TournamentService tournamentService;

    @GetMapping
    public ArrayList<TournamentModel> getAllTournaments() {
        return this.tournamentService.getAllTournaments();
    }

    @GetMapping("/{id}")
    public Optional<TournamentModel> getTournamentById(@PathVariable("id") Long id) {
        return this.tournamentService.getTournamentById(id);
    }

    @PostMapping
    public TournamentModel createTournament(@RequestBody TournamentModel tournament) {
        return this.tournamentService.createTournament(tournament);
    }

    @PutMapping("/{id}")
    public Optional<TournamentModel> updateTournament(@PathVariable("id") Long id, @RequestBody TournamentModel request) {
        return this.tournamentService.updateTournament(id, request);
    }

    @DeleteMapping("/{id}")
    public void deleteTournament(@PathVariable("id") Long id) {
        Boolean result = this.tournamentService.deleteTournament(id);
        if (result) {
            System.out.println("Torneo eliminado");
        } else {
            System.out.println("Error eliminando torneo");
        }
    }
}