package com.asi1.GameCard.rest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.asi1.GameCard.model.Card;

@Controller
public class RequestCrt {

	private static String messageLocal = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";

	@RequestMapping(value = { "/", "/index" }, method = RequestMethod.GET)
	public String index(Model model) {
		model.addAttribute("messageLocal", messageLocal);
		return "index";
	}

	@GetMapping("/create-card")
	public String showCreateCardForm(Model model) {
		model.addAttribute("card", new Card());
		System.out.println("coucou");
		return "create-card";
	}

	@PostMapping("/create-card")
	public String createCard(Card card, Model model) {
		// Simulez la sauvegarde de la carte et l'affichage des données
		model.addAttribute("card", card);
		return "display-card";
	}
}