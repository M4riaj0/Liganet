package com.api.backend.services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.backend.models.TeamModel;
import com.api.backend.repositories.ITeamRepository;

@Service
public class TeamService {

    @Autowired
    private ITeamRepository equipoRepository;

    public ArrayList<TeamModel> getAllTeams() {
        return (ArrayList<TeamModel>) equipoRepository.findAll(); // JPA usa findAll() para obtener todos los registros
    }

    public TeamModel createTeam(TeamModel equipo) {
        return equipoRepository.save(equipo); // JPA usa save() para guardar un registro
    }

    public Optional<TeamModel> getTeamById(Long id) {
        return equipoRepository.findById(id);
    }

    public Optional<TeamModel> updateTeam(Long id, TeamModel request) {
        Optional<TeamModel> equipoFound = equipoRepository.findById(id);
        if (equipoFound.isPresent()) {
            TeamModel equipo = equipoFound.get();
            equipo.setNombreEquipo(request.getNombreEquipo());
            equipo.setDescripcion(request.getDescripcion());
            equipo.setCiudad(request.getCiudad());
            equipo.setCantidadMiembros(request.getCantidadMiembros());
            equipoRepository.save(equipo);
        }
        return equipoFound;
    }

    public Boolean deleteTeam(Long id) {
        try {
            equipoRepository.deleteById(id);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}
