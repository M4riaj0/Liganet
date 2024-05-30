package com.api.backend.repositories;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.api.backend.models.FieldModel;
import java.util.ArrayList;

@Repository
public interface IFieldRepository extends JpaRepository<FieldModel, Long> {
    ArrayList<FieldModel> findByNombreContaining(String nombre);
}
