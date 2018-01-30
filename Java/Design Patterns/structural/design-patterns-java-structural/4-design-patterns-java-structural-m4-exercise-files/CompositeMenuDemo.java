package com.pluralsight.composite;


public class CompositeMenuDemo {

	public static void main(String[] args) {
		
		Menu mainMenu = new Menu("Main", "/main");
		MenuItem safetyMenuItem = new MenuItem("Safety", "/safety");
		Menu claimsSubMenu = new Menu("Claims", "/claims");
		MenuItem personalClaimsMenu = new MenuItem("Personal Claim", "/personalClaims");
		
		mainMenu.add(safetyMenuItem);
		mainMenu.add(claimsSubMenu);
		claimsSubMenu.add(personalClaimsMenu);
		
		System.out.println(mainMenu.toString());
	}
}
