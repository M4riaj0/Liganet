package com.api.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.api.backend.models.UserModel;
import com.api.backend.services.UserService;

import java.util.Optional;

@RestController
@RequestMapping("/api/login")

public class LoginController {
    @Autowired
    private UserService userService;

    @PostMapping
    public ResponseEntity<?> loginUser(@RequestBody UserModel user) {
        Optional<UserModel> existingUser = userService.getUserByUserName(user.getNombreUsuario());
        if (existingUser.isPresent()) {
            if (existingUser.get().getContraseña().equals(user.getContraseña())) {
                return ResponseEntity.ok(existingUser.get());
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Contraseña incorrecta");
            }
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuario no encontrado");
        }
    }
}
