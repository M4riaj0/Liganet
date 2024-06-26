package com.api.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.api.backend.models.UserModel;
import com.api.backend.services.UserService;

import com.api.backend.models.AddressModel;
import com.api.backend.services.AddressService;

import com.api.backend.models.PlayerModel;
import com.api.backend.services.PlayerService;

import com.api.backend.dto.CreateUserDTO;

import java.util.ArrayList;
import java.util.Optional;

@RestController
@RequestMapping("/api/user")

public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private AddressService addressService;

    @Autowired
    private PlayerService playerService;

    @GetMapping
    public ArrayList<CreateUserDTO> getAllUsers() {
        ArrayList<CreateUserDTO> responseList = new ArrayList<>();
        ArrayList<UserModel> users = this.userService.getAllUsers();
        for (UserModel user : users) {
            CreateUserDTO responseItem = new CreateUserDTO();
            responseItem.setUser(user);
            Optional<PlayerModel> playerOptional = this.playerService.getPlayerByUser(user.getIdUser());
            PlayerModel player = playerOptional.orElse(null);
            responseItem.setPlayer(player);
            if(user.getIdDireccion() != null){
                Optional<AddressModel> addressOptional = this.addressService.getAddressById(user.getIdDireccion());
                AddressModel address = addressOptional.orElse(null);
                responseItem.setAddress(address);
            }
            responseList.add(responseItem);
        }
        return responseList;
    }

    @GetMapping("/{id}")
    public CreateUserDTO getUserById(@PathVariable("id") Long id) {
        Optional<UserModel> userOptional = this.userService.getUserById(id);
        CreateUserDTO responseItem = new CreateUserDTO();
        UserModel user = userOptional.orElse(null);
        responseItem.setUser(user);
        Optional<PlayerModel> playerOptional = this.playerService.getPlayerByUser(user.getIdUser());
        PlayerModel player = playerOptional.orElse(null);
        responseItem.setPlayer(player);
        if(user.getIdDireccion() != null){
            Optional<AddressModel> addressOptional = this.addressService.getAddressById(user.getIdDireccion());
            AddressModel address = addressOptional.orElse(null);
            responseItem.setAddress(address);
        }
        return responseItem;
    }

    @GetMapping("/name/{name}")
    public ArrayList<CreateUserDTO> getUsersByName(@PathVariable("name") String name) {
        ArrayList<CreateUserDTO> responseList = new ArrayList<>();
        ArrayList<UserModel> users = this.userService.getUsersByName(name);
        for (UserModel user : users) {
            CreateUserDTO responseItem = new CreateUserDTO();
            responseItem.setUser(user);
            Optional<PlayerModel> playerOptional = this.playerService.getPlayerByUser(user.getIdUser());
            PlayerModel player = playerOptional.orElse(null);
            responseItem.setPlayer(player);
            if(user.getIdDireccion() != null){
                Optional<AddressModel> addressOptional = this.addressService.getAddressById(user.getIdDireccion());
                AddressModel address = addressOptional.orElse(null);
                responseItem.setAddress(address);
            }
            responseList.add(responseItem);
        }
        return responseList;
    }

    @PostMapping
    public ResponseEntity<?> createUser(@RequestBody CreateUserDTO request) {
        try {
            AddressModel address = request.getAddress(request);
            AddressModel newAddress = this.addressService.createAddress(address);
            UserModel user = request.getUser(request, newAddress.getIdDireccion());
            UserModel newUser = this.userService.createUser(user);
            PlayerModel player = request.getPlayer(request, newUser.getIdUser());
            this.playerService.createPlayer(player);
            return new ResponseEntity<>(newUser, HttpStatus.CREATED);
        } catch (Exception e) {
            e.printStackTrace(); // Imprime la excepción en la consola para su diagnóstico
            return new ResponseEntity<>("Error al crear usuario", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/{id}")
    public Optional<UserModel> updateUser(@PathVariable("id") Long id, @RequestBody UserModel request) {
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