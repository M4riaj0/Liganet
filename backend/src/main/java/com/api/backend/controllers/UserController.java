package com.api.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.api.backend.models.UserModel;
import com.api.backend.services.UserService;

import java.util.ArrayList;
import java.util.Optional;

@RestController
@RequestMapping("/api/user")

public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping
    public ArrayList<UserModel> getAllUsers() {
        return this.userService.getAllUsers();
    }

    @GetMapping("/{id}")
    public Optional<UserModel> getUserById(@PathVariable("id") Long id) {
        return this.userService.getUserById(id);
    }

    @PostMapping
    public UserModel createUser(@RequestBody UserModel user) {
        return this.userService.createUser(user);
    }

    @PutMapping("/{id}")
    public Optional<UserModel> updateUser(@PathVariable Long id, @RequestBody UserModel request) {
        return this.userService.updateUser(id, request);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable("id") Long id) {
        Boolean result = this.userService.deleteUser(id);
        if (result) {
            System.out.println("Usuario eliminado");
        } else {
            System.out.println("Error eliminando usuario");
        }
    }
}