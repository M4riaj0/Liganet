package com.api.backend.services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.backend.models.PlayerModel;
import com.api.backend.repositories.IPlayerRepository;

@Service
public class PlayerService {

    @Autowired
    private IPlayerRepository playerRepository;

    public ArrayList<PlayerModel> getAllPlayers() {
        return (ArrayList<PlayerModel>) playerRepository.findAll();
    }

    public PlayerModel createPlayer(PlayerModel player) {
        return playerRepository.save(player);
    }

    public Optional<PlayerModel> getPlayerById(Long id) {
        return playerRepository.findById(id);
    }

    public Optional<PlayerModel> getPlayerByUser(Long idUser) {
        return (Optional<PlayerModel>) playerRepository.findByIdPersona(idUser); // en JPA se usa findAll() para obtener todos los registros
    }

    public Optional<PlayerModel> updatePlayer(Long id, PlayerModel request) {
        Optional<PlayerModel> playerFound = playerRepository.findById(id);
        if (playerFound.isPresent()) {
            PlayerModel player = playerFound.get();
            player.setAltura(request.getAltura());
            player.setAñosExperiencia(request.getAñosExperiencia());
            player.setNivelCompetencia(request.getNivelCompetencia());
            player.setNumeroEquipacion(request.getNumeroEquipacion());
            player.setPerfilDominante(request.getPerfilDominante());
            player.setPeso(request.getPeso());
            player.setPiernaDominante(request.getPiernaDominante());
            player.setPosicionPrincipal(request.getPosicionPrincipal());
            player.setPosicionSecundaria(request.getPosicionSecundaria());
            player.setFotoUrl(request.getFotoUrl());
            playerRepository.save(player);
        }
        return playerFound;
    }

    public Boolean deletePlayer(Long id) {
        try {
            playerRepository.deleteById(id);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}
