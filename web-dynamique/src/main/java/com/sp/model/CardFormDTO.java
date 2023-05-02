package com.sp.model;
public class CardFormDTO  {

	private Affinity affinity;
	private String description;
	private String name;
	private String imgUrl;
	
	private int hp;
	private int Energy;
	private int Attack;
	private int Defence;

	
	public CardFormDTO() {
		this.name = "";
		this.imgUrl="";
		this.affinity=Affinity.Shadow;
		this.description="";
		this.hp=0;
		this.Energy=0;
		this.Attack=0;
		this.Defence=0;
	}
	
	public CardFormDTO(String name, String imgUrl,Affinity Affinity,String Description,int Hp,int Energy,int Attack,int Defence) {
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
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public void setAffinity(Affinity affinity) {
		this.affinity = affinity;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public void setHp(int hp) {
		this.hp = hp;
	}
	public void setEnergy(int energy) {
		Energy = energy;
	}
	public void setAttack(int attack) {
		Attack = attack;
	}
	public void setDefence(int defence) {
		Defence = defence;
	}
	public String getImgUrl() {
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

	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}
}

    // GETTER AND SETTER

