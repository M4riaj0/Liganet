package com.api.backend.repositories;

import com.api.backend.models.UserModel;

import java.util.Optional;
import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface IUserRepository extends JpaRepository<UserModel, Long> {
    Optional<UserModel> findByNombreUsuario(String nombreUsuario);
    ArrayList<UserModel> findByNombreCompletoContaining(String name);
}