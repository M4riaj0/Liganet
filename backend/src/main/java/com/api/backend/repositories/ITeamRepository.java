package com.api.backend.repositories;

import com.api.backend.models.TeamModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ITeamRepository extends JpaRepository<TeamModel, Long> {
}