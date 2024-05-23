package com.api.backend.services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.backend.models.UserModel;
import com.api.backend.repositories.IUserRepository;

@Service
public class UserService {

    @Autowired
    private IUserRepository userRepository;

    public ArrayList<UserModel> getAllUsers() {
        return (ArrayList<UserModel>) userRepository.findAll(); // en JPA se usa findAll() para obtener todos los registros
    }

    public UserModel createUser(UserModel user) {
        return userRepository.save(user); // en JPA se usa save() para guardar un registro
    }

    public Optional<UserModel> getUserByUserName(String nombreUsuario) {
        return userRepository.findByNombreUsuario(nombreUsuario);
    }

    public Optional<UserModel> getUserById(Long id) {
        return Optional.ofNullable(userRepository.findById(id).get());        
        // return userRepository.findById(id);
    }

    /**
     * @param id
     * @param request
     * @return
     */
    public Optional<UserModel> updateUser(Long id, UserModel request) {
        Optional<UserModel> userFound = Optional.ofNullable(userRepository.findById(id).get());
        if (userFound.isPresent()) {
            userFound.get().setNombreCompleto(request.getNombreCompleto());
            userFound.get().setNombreUsuario(request.getNombreUsuario());
            userFound.get().setCorreo(request.getCorreo());
            userFound.get().setCelular(request.getCelular());
            userFound.get().setCedula(request.getCedula());
            userFound.get().setLugarExpedicion(request.getLugarExpedicion());
            userFound.get().setFechaNacimiento(request.getFechaNacimiento());
            userFound.get().setGenero(request.getGenero());
            userFound.get().setNacionalidad(request.getNacionalidad());
            userFound.get().setContraseña(request.getContraseña());
            userFound.get().setIdDireccion(request.getIdDireccion());
            userRepository.save(userFound.get());
        }
        return userFound;
    }

    public Boolean deleteUser(Long id) {
        try {
            userRepository.deleteById(id);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}