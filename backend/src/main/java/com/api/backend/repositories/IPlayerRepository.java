package com.api.backend.repositories;

import com.api.backend.models.PlayerModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IPlayerRepository extends JpaRepository<PlayerModel, Long> {
    Optional<PlayerModel> findByIdPersona(Long idPersona);
}