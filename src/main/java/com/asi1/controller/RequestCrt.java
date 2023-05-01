package com.asi1.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class RequestCrt {

	private static String messageLocal = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";

	@RequestMapping(value = { "/", "/index" }, method = RequestMethod.GET)
	public String index(Model model) {
		model.addAttribute("messageLocal", messageLocal);
		return "index";
	}

	// Path : /fetch.html
	@RequestMapping(value = { "/fetch" }, method = RequestMethod.GET)
	public String fetch(Model model) {
		return "fetch";
	}

	// // Path : /searchCard.html
	// @RequestMapping(value = { "/searchCard" }, method = RequestMethod.GET)
	// public String searchCard(Model model) {
	// return "searchCard";
	// }

	// Path : /search.html
	@RequestMapping(value = { "/search" }, method = RequestMethod.GET)
	public String search(Model model) {
		return "searchCard";
	}

}
