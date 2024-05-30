package com.api.backend.repositories;

import com.api.backend.models.TournamentModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface ITournamentRepository extends JpaRepository<TournamentModel, Long> {
    ArrayList<TournamentModel> findByNombreTorneoContaining(String nombreTorneo);
}