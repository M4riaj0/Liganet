package com.api.backend.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
// import jakarta.persistence.JoinColumn;
// import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "jugador")
public class PlayerModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_jugador")
    private Long idJugador;

    // @OneToOne
    // @JoinColumn(name = "id_persona", referencedColumnName = "id_persona")
    // private UserModel idPersona;

    @Column(name = "id_persona")
    private Long idPersona;

    @Column(name = "id_equipo")
    private Long idEquipo;

    @Column(name = "id_contacto_emergencia")
    private Long idContacto;

    // @OneToOne
    // @JoinColumn(name = "id_equipo", referencedColumnName = "id_equipo")
    // private EquipoModel equipo;

    // @OneToOne
    // @JoinColumn(name = "id_contacto_emergencia", referencedColumnName = "id_contacto")
    // private ContactoEmergenciaModel contactoEmergencia;

    @Column(name = "altura")
    private Double altura;

    @Column(name = "años_experiencia")
    private Integer añosExperiencia;

    @Column(name = "nivel_competencia")
    private Integer nivelCompetencia;

    @Column(name = "numero_equipacion")
    private Integer numeroEquipacion;

    @Column(name = "perfil_dominante")
    private String perfilDominante;

    @Column(name = "peso")
    private Double peso;

    @Column(name = "pierna_dominante")
    private String piernaDominante;

    @Column(name = "posicion_principal")
    private String posicionPrincipal;

    @Column(name = "posicion_secundaria")
    private String posicionSecundaria;

    @Column(name = "foto_url")
    private String fotoUrl;

    // Getters y setters
    public Long getIdJugador() {
        return idJugador;
    }

    public void setIdJugador(Long idJugador) {
        this.idJugador = idJugador;
    }

    public Long getPersona() {
        return idPersona;
    }

    public void setPersona(Long persona) {
        this.idPersona = persona;
    }

    public Long getEquipo() {
        return idEquipo;
    }

    public void setEquipo(Long equipo) {
        this.idEquipo = equipo;
    }

    public Long getContactoEmergencia() {
        return idContacto;
    }

    public void setContactoEmergencia(Long contactoEmergencia) {
        this.idContacto = contactoEmergencia;
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

    public String getFotoUrl() {
        return fotoUrl;
    }

    public void setFotoUrl(String fotoUrl) {
        this.fotoUrl = fotoUrl;
    }
}
