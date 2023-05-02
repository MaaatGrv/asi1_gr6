package com.sp.model;
public class Card  {
	private Affinity affinity;
	private String description;
	private String name;
	private String imgUrl;
	private int hp;
	private int Energy;
	private int Attack;
	private int Defence;

	public Card() {
		this.name = "";
		this.imgUrl="";
		this.affinity=Affinity.Shadow;
		this.description="";
		this.hp=0;
		this.Energy=0;
		this.Attack=0;
		this.Defence=0;
	}
	public Card(String name, String imgUrl,Affinity Affinity,String Description,int Hp,int Energy,int Attack,int Defence) {
		this.name = name;
		this.imgUrl=imgUrl;
		this.affinity=Affinity;
		this.description=Description;
		this.hp=Hp;
		this.Energy=Energy;
		this.Attack=Attack;
		this.Defence=Defence;
	}
	
	public String getName() {
		 String name = this.name;
		return name;
	}
	
	public String getImgUrl() {
		String imgUrl = this.imgUrl;
		return imgUrl;
	}
	
	public Affinity getAffinity() {
		return affinity;
	}
	public String getDescription() {
		return description;
	}
	public int getHp() {
		return hp;
	}
	public int getEnergy() {
		return Energy;
	}
	public int getAttack() {
		return Attack;
	}
	public int getDefence() {
		return Defence;
	}

  // GETTER AND SETTER
}
