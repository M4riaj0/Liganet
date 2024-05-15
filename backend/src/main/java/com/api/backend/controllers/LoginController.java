package com.api.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.api.backend.models.UserModel;
import com.api.backend.services.UserService;

import java.util.ArrayList;

@RestController
@RequestMapping("/api/login")

public class LoginController {
    @Autowired
    private UserService userService;

    @PostMapping
    public ResponseEntity<UserModel> createUser(@RequestBody UserModel user) {
        ArrayList<UserModel> users = this.userService.getAllUsers();
        for (UserModel existingUser : users) {
            if(existingUser.getNombreUsuario().equals(user.getNombreUsuario()) && existingUser.getContraseña().equals(user.getContraseña())){
                return new ResponseEntity<>(existingUser, HttpStatus.OK);
            }
        }
        return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
    }
}
