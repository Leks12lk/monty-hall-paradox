import { GameType } from '../models/game-type';
import { CardType, ICard } from '../models/card';
import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'game',
	templateUrl: './game.component.html',
	styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
	@Input() gameType: GameType;
	@Input() totalCount: number;

	count = 1000;
	initialArray: ICard[] = [
		{
			id: 1,
			type: CardType.Sheep,
			inGame: true,
			selected: false
		},
		{
			id: 2,
			type: CardType.Sheep,
			inGame: true,
			selected: false
		},
		{
			id: 3,
			type: CardType.Car,
			inGame: true,
			selected: false
		}		
	];

	resultArray: ICard[] = [];

	
	successCount = 0;
	failedCount = 0;

	constructor() { }

	ngOnInit() {
	}

	startGame() {		
		this.resultArray = [];
		for(let i = 0; i < this.totalCount; i++) {
			let result = this.run(GameType.ChangeCard);
			//let result = this.runRandom(i);
			this.resultArray.push(result);
		}	
		// this.totalCount = this.resultArray.length;
		this.successCount = this.resultArray.filter(x => x.type === CardType.Car).length;
		this.failedCount = this.resultArray.filter(x => x.type === CardType.Sheep).length;
	}

	private run(gameType: GameType = GameType.ChangeCard) : ICard {			
		gameType = this.gameType;
		// select a card
		let arrayInGame = this.initialArray.slice(0, this.initialArray.length);
		let r1 = this.getRandomInt(0, arrayInGame.length -1);
		let selectedElement = arrayInGame[r1];
		selectedElement.selected = true;

		
		
		
		let arrayToOpenCard = arrayInGame
					.filter(x => x.type === CardType.Sheep && x.selected === false);

		let r2 = this.getRandomInt(0, arrayToOpenCard.length - 1);

		let openedElement = arrayToOpenCard[r2];		

		let newArray = arrayInGame.filter(x => x !== openedElement);
		
		
		//change choice
		let resultArray = arrayInGame.filter(x => x.selected === false && x !== openedElement);
		if(gameType === GameType.Random) {
			resultArray = newArray;
		}
		
		let r3 = this.getRandomInt(0, resultArray.length - 1);
		selectedElement.selected = false;
		let result = resultArray[r3];	
		
		return result;
	}

	private runRandom(i: number) : ICard {		
		// select a card
		let arrayInGame = this.initialArray.slice(0, this.initialArray.length);
		let r1 = this.getRandomInt(0, arrayInGame.length -1);
		let selectedElement = arrayInGame[r1];
		selectedElement.selected = true;		
		
		let arrayToOpenCard = arrayInGame
					.filter(x => x.type === CardType.Sheep && x.selected === false);

		let r2 = this.getRandomInt(0, arrayToOpenCard.length - 1);
		let openedElement = arrayToOpenCard[r2];
		
		
		//change choice
		let resultArray = arrayInGame.filter(x => x !== openedElement);
		
		let r3 = this.getRandomInt(0, resultArray.length - 1);
		selectedElement.selected = false;
		let result = resultArray[r3];	
		
		return result;
	}


	private getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

}
