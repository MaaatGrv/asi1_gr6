package com.sp.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import org.springframework.stereotype.Service;

import com.sp.model.Affinity;
import com.sp.model.Card;

@Service
public class CardDao {
	private List<Card> mycardList;
	private Random randomGenerator;

	public CardDao() {
		mycardList=new ArrayList<>();
		randomGenerator = new Random();
		createcardList();
	}

	private void createcardList() {
  
		Card p1=new Card("Carapuce", "https://media.tenor.com/O-h2CnIZGQIAAAAC/squirtle-smile.gif",Affinity.Water,"Il se réfugie dans sa carapace pour se protéger et réplique en projetant de l'eau sur ses ennemis dès que ces derniers baissent leur garde.",100,100,55,150);
		Card p2=new Card("Salamèche", "https://media.tenor.com/imUldC5bpu4AAAAC/pokemon-charmander.gif",Affinity.Fire,"La flamme qui brûle au bout de sa queue indique l'humeur de ce Pokémon. Elle vacille lorsque Salamèche est content. En revanche, lorsqu'il s'énerve, la flamme prend de l'importance et brûle plus ardemment.",80,75,85,55);
		Card p3=new Card("Bulbizarre", "https://media.tenor.com/csFIEyq0JikAAAAC/adorable-pokemon.gif",Affinity.Earth,"Un Pokémon Graine, évolution de Bulbizarre. Le poids du bulbe de fleur présent sur son dos lui a fait développer des jambes et hanches musclées. Si le bourgeon grossit trop, ce Pokémon ne peut plus se dresser sur ses pattes arrières. À un certain niveau, il évolue en Florizarre, et le bulbe absorbe des nutriments pour s'ouvrir en fleurs à grandes pétales.",150,59,48,175);
		mycardList.add(p1);
		mycardList.add(p2);
		mycardList.add(p3);
	}
	public List<Card> getcardList() {
		return this.mycardList;
	}
	public Card getcardByName(String name){
		for (Card cardBean : mycardList) {
			if(cardBean.getName().equals(name)){
				return cardBean;
			}
		}
		return null;
	}
	public Card getRandomcard(){
		int index=randomGenerator.nextInt(this.mycardList.size());
		return this.mycardList.get(index);
	}

	public Card addcard(String name, String imgUrl,Affinity Affinity,String Description,int Hp,int Energy,int Attack,int Defence) {
		Card p=new Card(name, imgUrl, Affinity, Description,Hp,Energy,Attack,Defence);
		this.mycardList.add(p);
		return p;
	}
}

