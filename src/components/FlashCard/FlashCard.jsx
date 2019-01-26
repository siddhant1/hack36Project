import React from 'react';
import './FlashCard.css';
import Immutable from 'immutable';
import {Link } from 'react-router-dom'


class CreateCard extends React.Component {
    constructor() {
      super();
      this.state = {
        word: '',
        description: '',
        showError: false
      }
    } 
    hideError() {
      this.setState({showError: !this.state.showError});
    }
    
    render() {
      const errorMessage = this.state.showError ? 'Please fill in the word and description!' : '';
      return (
        <div className='create-card'>
          <div 
            className='create-card__shadow'
            onClick={() => {
              this.props.onShadowClick();
            }}
          >
          </div>
          <div className='create-card__body'>
            <h1>Create New Card</h1>
            <div className='create-card__input-wrapper'>
              <input 
                id='word' 
                placeholder="Word i.e. 'React'"
                value = {this.state.word}
                onChange = {(e) => this.setState({word: e.target.value})}
              />
              <input 
                id='description' 
                placeholder="Description i.e. 'A front end js framework.'"
                value = {this.state.description}
                onChange = {(e) => this.setState({description: e.target.value})}
              />
              <br/>
              <button 
                id='create-card__button'
                onClick={() => {
                 
                  if (this.state.word.length === 0 || this.state.description.length === 0) {
                    this.setState({showError: !this.state.showError});
                    setTimeout(() => this.hideError(), 2000);
                  } else {
                    this.props.onShadowClick();
                    const word = new Immutable.Map({word: this.state.word, description: this.state.description});
                    this.props.onCreateCard(word);  
                  }
                }}
              >
                  Create!
              </button>
              <div className='create-card__error'>
                {errorMessage}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  

  class Card extends React.Component {
    
    constructor() {
      super();
      this.state = {
        showAnswer: false
      }
    }
   
    render() {
      const content = this.state.showAnswer ? this.props.backContent : this.props.frontContent;
      const iconClass = this.state.showAnswer ? 'reply' : 'share';
      const cardClass = this.state.showAnswer ? 'back' : '';
      const contentClass = this.state.showAnswer ? 'back' : 'front';
      const actionClass = this.state.showAnswer ? 'active' : '';
  
      return (
        <div 
          className={`card ${cardClass}`}
          onClick={() => this.setState({showAnswer: !this.state.showAnswer})}
        >
        <span className='card__counter'>{this.props.cardNumber + 1}</span>
          <div 
            className='card__flip-card'
            onClick={ () => {
              this.setState({showAnswer: !this.state.showAnswer});
            }}
          >
  
            <span className={`fa fa-${iconClass}`}/>
          </div>
          <div className={`card__content--${contentClass}`}>
            {content}
          </div>
          <div className={`card__actions ${actionClass}`}>
            <div 
              className='card__prev-button'
              onClick={() => {
                this.props.showPrevCard();
                this.setState({showAnswer: false});
              }}
            >
              Prev
            </div>
            <div 
              className='card__next-button'
              onClick={() => {
                this.props.showNextCard();
                this.setState({showAnswer: false});
              }}
            >
              Next
            </div>
          </div>
        </div>
      );
    }
  }
  class CardContainer extends React.Component {
    constructor() {
      super();
      this.easyLevel=1;
      this.hardLevel=4;
      this.easyLevelRepeat=1;
      this.hardLevelRepeat=1;
      this.state = {
        cards: [{
            id: '1',
          word: 'Jazz1',
          description: 'A type of music of black American origin characterized by improvisation, syncopation, and usually a regular or forceful rhythm, emerging at the beginning of the 20th century.',
          priority : 0
        }, {
            id : '2',
          word: 'Reggae2',
          description: 'Music like Bob Marley, man.',
          priority : 0
        }, {
            id:'3',
          word: 'Folk3',
          description: 'Music like Bob Dylan, man.',
          priority : 0
        },
        {   id:'4',
            word: 'Reggae4',
            description: 'Music like Bob Marley, man.',
            priority : 0
          }, {
              id : '5',
            word: 'Folk5',
            description: 'Music like Bob Dylan, man.',
            priority : 0
          }, {
              id : '6',
            word: 'Reggae6',
            description: 'Music like Bob Marley, man.',
            priority : 0
          }, {
              id :'7',
            word: 'Folk7',
            description: 'Music like Bob Dylan, man.',
            priority : 0
          }
      ],
        cardNumber: 0
      };
      this.boundCallback = this.hideCreateCard.bind(this);
      this.boundCreateCard = this.setCard.bind(this);
      this.boundShowPrevCard = this.showPrevCard.bind(this);
      this.boundShowNextCard = this.showNextCard.bind(this);
    }
    componentDidMount(){
        let size=this.state.cards.length;
        var priorityList=JSON.parse(localStorage.getItem('priorityListArray'))
        if(priorityList){
            for(let key in priorityList){
                let itemCards= this.state.cards;
                itemCards[key].priority=priorityList[key];
                this.setState({cards : itemCards},()=>{
                    console.log('this.state ',this.state);
                });
            }
            return;
        }
        for(let i=0;i<size;i++){
            let itemCards= this.state.cards;
            itemCards[i].priority=size;
            this.setState({cards : itemCards},()=>{
                console.log('this.state ',this.state);
            });
            // this.setState({
            //     [this.state.cards[i].priority] : size
            // },()=>{
            //     console.log('this.state.card ',this.state.cards);
            // })
        }
    }

    componentWillUnmount(){
        console.log("localStorage")
        var priorityArray=[];
        for(let i=0;i<this.state.cards.length;i++){
            let priorityList={};
            ({id : priorityList.id,priority : priorityList.priority}=this.state.cards[i]);
            priorityArray.push(priorityList);
        }
        localStorage['priorityListArray']=priorityArray;
    }
    hideCreateCard() {
      this.setState({showModal: false});
    }
    showNextCard() {
      if ((this.state.cardNumber + 1) !== this.state.cards.size) {
        this.setState({cardNumber: this.state.cardNumber + 1});
      }
    }
    showPrevCard() {
      if (this.state.cardNumber !== 0) {
        this.setState({cardNumber: this.state.cardNumber - 1});
      }
    }
    setCard(card) {
      const newCards = this.state.cards.push(card);
      this.setState({cards: newCards});
    }
    
    // generateDots() {
    //   const times = this.state.cards.size;
    //   let arr = [];
    //   times(times).forEach((num) => {
    //     const dotClass = num  === this.state.cardNumber ? 'active' : '';
    //     arr.push(
    //       <span 
    //         className={`card-container__dot fa fa-circle ${dotClass}`}
    //         onClick={() => this.setState({cardNumber: num})}
    //       />
    //     )
    //   });
    //   return arr;
    // }
    sortCards=()=>{
        console.log('not done ',this.state);
        let itemCards= this.state.cards;
        itemCards.sort((firstCard,secondCard)=> firstCard.priority-secondCard.priority);
        this.setState({cards : itemCards},()=>{
            console.log('done ',this.state);
        })
    }
    SetPriority=(cardNumber,difficultyLevel)=>{
        console.log('set Priority ',cardNumber);
        if(difficultyLevel==='easy'){
            
            if(this.easyLevelRepeat===2 && this.hardLevelRepeat===0){
                this.hardLevel++;
            }
            let itemCards= this.state.cards;
            itemCards[cardNumber].priority=itemCards.length-this.easyLevel;
            this.setState({cards : itemCards},()=>{
                console.log('this.state ',this.state.cards);
                    this.easyLevel++;    
                    if(this.easyLevel>=this.state.cards.length){
                        this.easyLevel=0
                    }
                    this.easyLevelRepeat++;
                    this.sortCards();
                    if(cardNumber!==6){
                        this.showNextCard();
                        console.log('page baki hai');
                    }
                    else{
                        this.setState({cardNumber:0},()=>{
                            console.log('page khtm');
                        });
                    }
            })
        }
        else{
            console.log('difficulty Level');
            
            if(this.hardLevelRepeat===2 && this.easyLevelRepeat===0){
                this.easyLevel++;
            }
            let itemCards= this.state.cards;
            itemCards[cardNumber].priority=itemCards.length-this.hardLevel;
            this.setState({cards : itemCards},()=>{
                console.log('this.state ',this.state.cards);
                this.hardLevel--;
                if(this.hardLevel>=this.state.cards.length){
                    this.hardLevel=4;
                }
                this.hardLevelRepeat++;
                this.sortCards();
                if(cardNumber!==6){
                    this.showNextCard();
                    console.log('page baki hai');
                }
                else{
                    this.setState({cardNumber:0},()=>{
                        console.log('page khtm');
                    })
                }
            });
            
        }
        

    }
    generateCards() {
      const cards = this.state.cards;
       const cardsList = cards.map((card) => {
          return (
              <React.Fragment>
                    <center><Card 
                    frontContent={card.word}
                    backContent={card.description}
                    showNextCard={this.boundShowNextCard}
                    showPrevCard = {this.boundShowPrevCard}
                    cardNumber={this.state.cardNumber}
                    />
                    <div className="row priorityButton">
                        <div className="col-md-6 btn btn-success" onClick={()=>this.SetPriority(this.state.cardNumber,'easy')}>Easy</div>
                        <div className="col-md-6 btn btn-danger" onClick={()=>this.SetPriority(this.state.cardNumber,'hard')}>Hard</div>
                    </div>
                    </center>
            </React.Fragment>
            );
        })
        console.log(cardsList[this.state.cardNumber]);
       return(
            cardsList[this.state.cardNumber]); 
    }
    render() {
      return (
        <div>
          <span 
              className='card-container__icon  fa fa-plus' 
              onClick={() => {
                this.setState({showModal: !this.state.showModal});
              }}
            />
          {this.state.showModal 
            ? <CreateCard 
                onShadowClick={this.boundCallback}
                onCreateCard={this.boundCreateCard}
              /> 
            : ''}
          {this.generateCards()}
          <div className='card-container__dots-wrapper'>
            {/* {this.generateDots()} */}
          </div>
        </div>
     );
    }
  }
  
  class FlashCard extends React.Component {
    render() {
      return (
        <div className='wrapper'>
            <div id="actionButtons">
                <div >
                    <button className='btn btn-primary'>Back</button>
                </div>
                <div >
                    <button className='btn btn-success'>Refresh</button>
                </div>
            </div>
          <div className='content-wrapper col-md-12'>
            <CardContainer/>
          </div>
          <Link to="/topic" >TOPIC</Link>
        </div>
      );
    }
  }
  
export default FlashCard;