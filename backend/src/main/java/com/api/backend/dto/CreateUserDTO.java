package com.api.backend.dto;

import com.api.backend.models.UserModel;
import com.api.backend.models.AddressModel;
import com.api.backend.models.PlayerModel;


public class CreateUserDTO {

    private String nombreCompleto;
    private String cedula;
    private String lugarExpedicion;
    private String fechaNacimiento;
    private String celular;
    private String genero;
    private String nacionalidad;
    private String pais;
    private String departamento;
    private String direccion;
    private String ciudad;
    private Double altura;
    private Integer añosExperiencia;
    private Integer nivelCompetencia;
    private Integer numeroEquipacion;
    private String perfilDominante;
    private Double peso;
    private String piernaDominante;
    private String posicionPrincipal;
    private String posicionSecundaria;
    private String nombreUsuario;
    private String correo;
    private String contraseña;

    // Getters y Setters

    public String getNombreCompleto() {
        return nombreCompleto;
    }

    public void setNombreCompleto(String nombreCompleto) {
        this.nombreCompleto = nombreCompleto;
    }

    public String getCedula() {
        return cedula;
    }

    public void setCedula(String cedula) {
        this.cedula = cedula;
    }

    public String getLugarExpedicion() {
        return lugarExpedicion;
    }

    public void setLugarExpedicion(String lugarExpedicion) {
        this.lugarExpedicion = lugarExpedicion;
    }

    public String getFechaNacimiento() {
        return fechaNacimiento;
    }

    public void setFechaNacimiento(String fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
    }

    public String getCelular() {
        return celular;
    }

    public void setCelular(String celular) {
        this.celular = celular;
    }

    public String getGenero() {
        return genero;
    }

    public void setGenero(String genero) {
        this.genero = genero;
    }

    public String getNacionalidad() {
        return nacionalidad;
    }

    public void setNacionalidad(String nacionalidad) {
        this.nacionalidad = nacionalidad;
    }

    public String getPais() {
        return pais;
    }

    public void setPais(String pais) {
        this.pais = pais;
    }

    public String getDepartamento() {
        return departamento;
    }

    public void setDepartamento(String departamento) {
        this.departamento = departamento;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public String getCiudad() {
        return ciudad;
    }

    public void setCiudad(String ciudad) {
        this.ciudad = ciudad;
    }

    public Double getAltura() {
        return altura;
    }

    public void setAltura(Double altura) {
        this.altura = altura;
    }

    public Integer getAñosExperiencia() {
        return añosExperiencia;
    }

    public void setAñosExperiencia(Integer añosExperiencia) {
        this.añosExperiencia = añosExperiencia;
    }

    public Integer getNivelCompetencia() {
        return nivelCompetencia;
    }

    public void setNivelCompetencia(Integer nivelCompetencia) {
        this.nivelCompetencia = nivelCompetencia;
    }

    public Integer getNumeroEquipacion() {
        return numeroEquipacion;
    }

    public void setNumeroEquipacion(Integer numeroEquipacion) {
        this.numeroEquipacion = numeroEquipacion;
    }

    public String getPerfilDominante() {
        return perfilDominante;
    }

    public void setPerfilDominante(String perfilDominante) {
        this.perfilDominante = perfilDominante;
    }

    public Double getPeso() {
        return peso;
    }

    public void setPeso(Double peso) {
        this.peso = peso;
    }

    public String getPiernaDominante() {
        return piernaDominante;
    }

    public void setPiernaDominante(String piernaDominante) {
        this.piernaDominante = piernaDominante;
    }

    public String getPosicionPrincipal() {
        return posicionPrincipal;
    }

    public void setPosicionPrincipal(String posicionPrincipal) {
        this.posicionPrincipal = posicionPrincipal;
    }

    public String getPosicionSecundaria() {
        return posicionSecundaria;
    }

    public void setPosicionSecundaria(String posicionSecundaria) {
        this.posicionSecundaria = posicionSecundaria;
    }

    public String getNombreUsuario() {
        return nombreUsuario;
    }

    public void setNombreUsuario(String nombreUsuario) {
        this.nombreUsuario = nombreUsuario;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public String getContraseña() {
        return contraseña;
    }

    public void setContraseña(String contraseña) {
        this.contraseña = contraseña;
    }

    // Métodos para obtener modelos a partir del DTO

    public UserModel getUser(CreateUserDTO request, Long idDireccion){
        UserModel user = new UserModel();
        if(request != null){
            user.setNombreCompleto(request.getNombreCompleto());
            user.setNombreUsuario(request.getNombreUsuario());
            user.setCorreo(request.getCorreo());
            user.setCelular(request.getCelular());
            user.setCedula(request.getCedula());
            user.setLugarExpedicion(request.getLugarExpedicion());
            user.setFechaNacimiento(request.getFechaNacimiento());
            user.setGenero(request.getGenero());
            user.setNacionalidad(request.getNacionalidad());
            user.setContraseña(request.getContraseña());
            user.setIdDireccion(idDireccion);
        }
        return user;
    }

    public AddressModel getAddress(CreateUserDTO request){
        AddressModel address = new AddressModel();
        if(request != null){
            address.setDireccion(request.getDireccion());
            address.setCiudad(request.getCiudad());
            address.setDepartamento(request.getDepartamento());
            address.setPais(request.getPais());
        }
        return address;
    }

    public PlayerModel getPlayer(CreateUserDTO request, Long idPersona){
        PlayerModel player = new PlayerModel();
        if(request != null){
            player.setPersona(idPersona);
            player.setAltura(request.getAltura());
            player.setAñosExperiencia(request.getAñosExperiencia());
            player.setNivelCompetencia(request.getNivelCompetencia());
            player.setNumeroEquipacion(request.getNumeroEquipacion());
            player.setPerfilDominante(request.getPerfilDominante());
            player.setPeso(request.getPeso());
            player.setPiernaDominante(request.getPiernaDominante());
            player.setPosicionPrincipal(request.getPosicionPrincipal());
            player.setPosicionSecundaria(request.getPosicionSecundaria());
        }
        return player;
    }

    // Métodos para establecer el DTO a partir de los modelos

    public void setUser(UserModel user) {
        if (user != null) {
            this.setNombreCompleto(user.getNombreCompleto());
            this.setNombreUsuario(user.getNombreUsuario());
            this.setCorreo(user.getCorreo());
            this.setCelular(user.getCelular());
            this.setCedula(user.getCedula());
            this.setLugarExpedicion(user.getLugarExpedicion());
            this.setFechaNacimiento(user.getFechaNacimiento());
            this.setGenero(user.getGenero());
            this.setNacionalidad(user.getNacionalidad());
            this.setContraseña(user.getContraseña());
        }
    }

    public void setAddress(AddressModel address) {
        if (address != null) {
            this.setDireccion(address.getDireccion());
            this.setCiudad(address.getCiudad());
            this.setDepartamento(address.getDepartamento());
            this.setPais(address.getPais());
        }
    }

    public void setPlayer(PlayerModel player) {
        if (player != null) {
            this.setAltura(player.getAltura());
            this.setAñosExperiencia(player.getAñosExperiencia());
            this.setNivelCompetencia(player.getNivelCompetencia());
            this.setNumeroEquipacion(player.getNumeroEquipacion());
            this.setPerfilDominante(player.getPerfilDominante());
            this.setPeso(player.getPeso());
            this.setPiernaDominante(player.getPiernaDominante());
            this.setPosicionPrincipal(player.getPosicionPrincipal());
            this.setPosicionSecundaria(player.getPosicionSecundaria());
        }
    }
}
