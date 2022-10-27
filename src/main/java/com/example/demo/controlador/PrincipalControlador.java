package com.example.demo.controlador;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PrincipalControlador {
	
	@GetMapping("/votappG26")
	public String principal() {
		return "/index";
	}
	@GetMapping("/partido1")
	public String partidoPol1() {
		return "/pactohistorico";
	}
	@GetMapping("/partido2")
	public String partidoPol2() {
		return "/ligadegobernantes";
	}
	@GetMapping("/partido3")
	public String partidoPol3() {
		return "/centroesperanza";
	}
	@GetMapping("/partido4")
	public String partidoPol4() {
		return "/equipoporcolombia";
	}
	@GetMapping("/addVotante")
	public String addVotante() {
		return "/addVotante";
	}
}
