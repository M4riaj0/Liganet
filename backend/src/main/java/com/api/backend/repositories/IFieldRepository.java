package com.api.backend.repositories;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.api.backend.models.FieldModel;

@Repository
public interface IFieldRepository extends JpaRepository<FieldModel, Long> {

    Optional<FieldModel> findByNombre(String nombre);
}
