package com.api.backend.services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.backend.models.TournamentModel;
import com.api.backend.repositories.ITournamentRepository;

@Service
public class TournamentService {

    @Autowired
    private ITournamentRepository tournamentRepository;

    public ArrayList<TournamentModel> getAllTournaments() {
        return (ArrayList<TournamentModel>) tournamentRepository.findAll(); // en JPA se usa findAll() para obtener todos los registros
    }

    public TournamentModel createTournament(TournamentModel tournament) {
        return tournamentRepository.save(tournament); // en JPA se usa save() para guardar un registro
    }

    public Optional<TournamentModel> getTournamentById(Long id) {
        return Optional.ofNullable(tournamentRepository.findById(id).get());        
        // return tournamentRepository.findById(id);
    }

    public ArrayList<TournamentModel> getTournamentByName(String nombreTorneo) {
        return (ArrayList<TournamentModel>) tournamentRepository.findByNombreTorneoContaining(nombreTorneo); // en JPA se usa findAll() para obtener todos los registros
    }

    /**
     * @param id
     * @param request
     * @return
     */
    public Optional<TournamentModel> updateTournament(Long id, TournamentModel request) {
        Optional<TournamentModel> tournamentFound = Optional.ofNullable(tournamentRepository.findById(id).get());
        if (tournamentFound.isPresent()) {
            tournamentFound.get().setCantidadEquipos(request.getCantidadEquipos());
            tournamentFound.get().setCantidadJugadoresEquipo(request.getCantidadJugadoresEquipo());
            tournamentFound.get().setCategoria(request.getCategoria());
            tournamentFound.get().setDescripcion(request.getDescripcion());
            tournamentFound.get().setFechaInicio(request.getFechaInicio());
            tournamentFound.get().setFormato(request.getFormato());
            tournamentFound.get().setHorario(request.getHorario());
            tournamentFound.get().setNombreTorneo(request.getNombreTorneo());
            tournamentFound.get().setPrecioInscripcion(request.getPrecioInscripcion());
            tournamentFound.get().setPrecioPremiacion(request.getPrecioPremiacion());
            tournamentFound.get().setReglamento(request.getReglamento());
            tournamentFound.get().setIdEmpresa(request.getIdEmpresa());
            tournamentFound.get().setIdReglamento(request.getIdReglamento());
        }
        return tournamentFound;
    }

    public Boolean deleteTournament(Long id) {
        try {
            tournamentRepository.deleteById(id);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}