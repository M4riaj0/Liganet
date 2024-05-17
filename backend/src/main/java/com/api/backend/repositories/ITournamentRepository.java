package com.api.backend.repositories;

import com.api.backend.models.TournamentModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ITournamentRepository extends JpaRepository<TournamentModel, Long> {
}